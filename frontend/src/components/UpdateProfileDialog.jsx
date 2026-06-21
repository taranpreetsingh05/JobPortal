import React, { useState } from "react";
import store from "../redux/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { USER_API_END_POINT } from "../utils/constant";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/authSlice";
import { toast } from "sonner";
function UpdateProfileDialog({ open, setOpen }) {
  const [loading,setLoading]=useState(false);
  const {user}=useSelector(store=>store.auth);
  const [input,setInput]=useState({
  fullName:user?.fullName || "",
  email:user?.email || "",
  phoneNumber:user?.phoneNumber || "",
  bio:user?.profile?.bio || "",
  skills:user?.profile?.skills?.join(", ") || "",
  file:null
});
  const dispatch=useDispatch();
  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const fileChangeHandler=(e)=>{
    const file=e.target.files?.[0];
    setInput({...input,file});
  }
  const submitHandler=async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("fullName",input.fullName);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("bio",input.bio);
    formData.append("skills",input.skills);
    if(input.file){
      formData.append("file",input.file);
    }
    try {
      setLoading(true);
      const res=await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
    finally{
      setLoading(false);
      setOpen(false);
    }
    
    console.log(input);
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler} action="">
            <div className="grid gap-4 my-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input onChange={changeEventHandler} id="name" value={input.fullName} name="fullName" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input onChange={changeEventHandler} value={input.email} id="email" name="email" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input onChange={changeEventHandler} value={input.phoneNumber} id="number" name="phoneNumber" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input onChange={changeEventHandler} value={input.bio} id="bio" name="bio" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input onChange={changeEventHandler} value={input.skills} id="skills" name="skills" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input onChange={fileChangeHandler}  id="file" type="file" name="file" className="col-span-3"></Input>
              </div>
            </div>
            <DialogFooter>
            {loading?<Button  className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/></Button>:<Button  type="submit" className="w-full my-1">
                    Update
                </Button>
                }
               
          </DialogFooter>
          </form>
          
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
