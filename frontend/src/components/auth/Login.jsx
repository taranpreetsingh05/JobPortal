import React, { useState } from 'react'

import Navbar from '../shared/Navbar';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from "../../redux/authSlice";
import { Loader2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
 const [input,setInput]=useState({
    
    email:"",
    password:"",
    role:"",
  });
  const dispatch=useDispatch();
  const {loading}=useSelector(store=>store.auth);
  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();// prevents page form reloading 
    
    try {
      dispatch(setLoading(true));
            const res=await axios.post(`${USER_API_END_POINT}/login`,input,{
        headers:{
          "Content-type":"application/json"
        },
        withCredentials:true,
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.msg);
      }
    } catch (error) {
  

  toast.error(
    error.response?.data?.message ||
    error.response?.data?.msg ||
    "Login failed"
  );
}
    finally{
      dispatch(setLoading(false));
    }
  };
  
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center w-7xl  mx-auto mt-7'>
            <form onSubmit={submitHandler} className='min-h-[370px] w-1/2  border border-gray-300 rounded-md p-4 my-10'>
                <h1 className='font-bold text-xl mb-7'>Login</h1>
               
                <div className='my-2'>
                                     <Label>Email</Label>
                                     <Input
                                     type="email"
                                     name="email"
                                     onChange={changeEventHandler}
                                     value={input.email}
                                     placeholder="example@gmail.com"
                                     />
                                </div>
              
                   <div className='my-2'>
                                        <Label>Password</Label>
                                        <Input
                                        type="password"
                                       name="password"
                                        onChange={changeEventHandler}
                                        value={input.password}
                                        />
                                   </div>
                
                <div className='flex items-center justify between my-4'>
                    <RadioGroup className="flex items-center gap-4 my-5 w-fit">
      <div className="flex items-center gap-3">
        <Input
        type="radio"
        name="role"
        value="student"
        checked={input.role==='student'}
        onChange={changeEventHandler}
        className="cursor-pointer"
        />
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center gap-3">
        <Input
        type="radio"
        name="role"
         checked={input.role==='recruiter'}
        onChange={changeEventHandler}
        value="recruiter"
        className="cursor-pointer"
        />
        <Label htmlFor="r2">Recruiter</Label>
      </div>
      
    </RadioGroup>

                </div>
                {
                  loading?<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/></Button>:<Button type="submit" className="w-full my-1">
                    Login
                </Button>
                }
                
                <span className='text-sm'>Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login;