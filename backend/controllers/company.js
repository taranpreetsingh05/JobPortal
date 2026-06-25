const express=require("express");
const Company=require("../models/company");
const mongoose=require("mongoose");
const getDataUri = require("../utils/datauri");
const cloudinary = require("../utils/cloudinary");
async function registerCompany(req,res){
try{
const {name}=req.body;
if(!name){
    return res.status(400).json({
        msg:"company name is required",
        success:false
    });}
let company=await Company.findOne({name});
if(company){
    return res.status(400).json({
        msg:"company already exists",
        success:false
    })}
    company=await Company.create({
        name,
        userId:req.id,
        
    });
return res.status(201).json({
    msg:"company has been registered",
    success:true,
    company
});


}
catch(error){
      console.log(error);
}
}

async function getCompany(req,res){
    try{
        const userId=req.id;//logged in user id of the user
        const companies=await Company.find({userId});
        if(companies.length==0){
            return res.status(404).json({
                msg:"companies not found",
                success:false
            });
        }
        return res.status(200).json({
    companies,
    success:true
});

    }
    
    catch(error){
        console.log(error);
    }
};
//to get company by id

async function getCompanyById(req,res){
    try{
        const companyId=req.params.id;
        const company= await Company.findOne({_id:companyId});
         if(!company){
            return res.status(400).json({
                msg:"company not found",
                success:false
            });
        }
        return res.status(200).json({
            company,
            success:true
        });
    }
    catch(error){
console.log(error);
    }
}

async function updateCompany(req,res){
    try{
        const{name,description,website,location}=req.body;
        const file=req.file;// use of cloudinary
        const fileUri=getDataUri(file); 
        const cloudresponse=await cloudinary.uploader.upload(fileUri.content);
        const logo=cloudresponse.secure_url;
        const updateData={name,description,website,location,logo};
        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
        if(!company){
            return res.status(400).json({
                msg:"company not found",
                success:false
            });
        }
        return res.status(200).json({
            msg:"company info updated",
            company,
            success:true
        });
    }
    catch(error){
console.log(error);
    }
};
module.exports={registerCompany,getCompany,updateCompany,getCompanyById};