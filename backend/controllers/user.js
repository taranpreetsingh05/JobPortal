const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getDataUri = require("../utils/datauri");
const cloudinary = require("../utils/cloudinary");
    const isProduction = process.env.NODE_ENV === "production";

async function register(req, res) {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({ msg: "Enter all details", success: false });
    }
    const file=req.file;
    const fileUri=getDataUri(file);
    const cloudResponse=await cloudinary.uploader.upload(fileUri.content,{
      resource_type: "auto",
  access_mode: "public"
    }); 
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        msg: "user already exists",
        success: false,
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile:{
        profilePhoto:cloudResponse.secure_url,
      }
    });
    return res.status(201).json({
      msg: "account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
}

async function login(req, res) {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ msg: "Enter all details", success: false });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "incorrect password or email",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        msg: "incorrect password",
        success: false,
      });
    }
    if (role !== user.role) {
      return res.status(400).json({
        msg: "account does not exist with current role",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

return res
  .status(200)
  .cookie("token", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  })
  .json({
    msg: `welcome back ${user.fullName}`,
    success: true,
    user,
  });
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
      success: false,
    });
  }
}

async function logout(req, res) {
  try {
    return res
  .status(200)
  .cookie("token", "", {
    maxAge: 0,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  })
  .json({
    msg: "logged out successfully",
    success: true,
  });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
}
async function updateProfile(req, res) {
  try {
   
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file=req.file;
    let cloudresponse;
   if(file){
    const fileUri=getDataUri(file);
     cloudresponse=await cloudinary.uploader.upload(fileUri.content, {
    resource_type: "auto",
    access_mode: "public"
  });
}

    const userId = req.id; // this will come from middleware of authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        msg: "user not found",
        success: false,
      });
    }
    if(fullName) user.fullName = fullName;
if(email) user.email = email;
if(phoneNumber) user.phoneNumber = phoneNumber;
if(bio) user.profile.bio = bio;
if(skills){
    const skillsArray = skills.split(",");
    user.profile.skills = skillsArray;}

    if(cloudresponse){
      console.log(cloudresponse);
      user.profile.resume=cloudresponse.secure_url;
      user.profile.resumeOriginalName=file.originalname;
    }
    await user.save();
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
        msg:"user updated successfully",
        success:true,
        user
    })
  } catch (error) {
    console.log(error);

    return res.status(500).json({
        success: false,
        msg: "Internal Server Error"
    });
  }
}
module.exports = { register, login, logout ,updateProfile};
