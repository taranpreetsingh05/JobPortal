import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from "../../redux/authSlice";
import { Loader2 } from 'lucide-react';
import axios from "axios";
const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const dispatch=useDispatch();
  const {loading}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();// prevents page form reloading 
    const formData=new FormData();
    formData.append("fullName",input.fullName);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("password",input.password);
    formData.append("role",input.role);
    if(input.file){
      formData.append("file",input.file);
    }
    try {
      dispatch(setLoading(true));
      const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers:{
          "Content-type":"multipart/form-data"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
    
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  toast.error(error.response?.data?.message);
}

    
    finally{
            dispatch(setLoading(false));

    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-7xl  mx-auto mt-7">
        <form
          onSubmit={submitHandler}
          className="min-h-[370px] w-1/2  border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-7">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              onChange={changeEventHandler}
              value={input.fullName}
              placeholder="taran"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={changeEventHandler}
              value={input.email}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              onChange={changeEventHandler}
              value={input.phoneNumber}
              placeholder="XXXXXXXXXX"
            />
            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={changeEventHandler}
                value={input.password}
              />
            </div>
          </div>
          <div className="flex items-center justify between my-4">
            <RadioGroup className="flex items-center gap-4 my-5 w-fit">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2 ml-3">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          {
                  loading?<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/></Button>:<Button type="submit" className="w-full my-1">
                    SignUp
                </Button>
                }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
