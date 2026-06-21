import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { User2, LogOut } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import toast from 'react-hot-toast';
import { USER_API_END_POINT } from '../../utils/constant';
import axios from 'axios';
import { setUser } from "@/redux/authSlice";
const Navbar = () => {
  const { user } = useSelector(store => store.auth);
const dispatch = useDispatch();
const navigate = useNavigate();
 const logOutHandler=async()=>{
  try {
    const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
    if(res.data.success){
      dispatch(setUser(null));
      navigate("/");
      toast.success(res.data.msg);
    }
  } catch (error) {
    console.log(error);

    toast.error(
        error.response?.data?.msg || "Something went wrong"
    );
}
}
  return (
    
    <div className='bg-white'> 
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
            <h1 className='text-4xl font-bold'>Job<span className='text-[#F33002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
            <ul className='flex font-medium items-center gap-5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/browse">Browse</Link></li>
            </ul>
            
            {
              !user?(
                
                <div>
                  <Link to="/login">
                  <Button variant='outline'>Login</Button>
                  </Link>
                  <Link to="/signup">
                  <Button variant='outline'>SignUp</Button>
                  </Link>
                </div>
              ):
              (
 <Popover>
  <PopoverTrigger asChild>
    <Avatar className='cursor-pointer'>
  <AvatarImage src={user?.profile?.profilePhoto} />
</Avatar>
  </PopoverTrigger>

  <PopoverContent>
    <div className='flex gap-4 '>
    <Avatar className='cursor-pointer'>
  <AvatarImage src={user?.profile?.profilePhoto} />
</Avatar>
<div>
<h4 className='font-medium'>{user?.fullName}</h4>
<p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
</div>
</div>
<div>
  <User2/>
  <Button className="focus-visible:ring-0 focus-visible:ring-offset-0" variant='link'><Link to='/profile'>View Profie</Link></Button>
</div>
<div>
  <LogOut/>
<Button onClick={logOutHandler} className="focus-visible:ring-0 focus-visible:ring-offset-0" variant='link'>Logout</Button>
</div>
  </PopoverContent>
</Popover>
              )
            }
           
        </div>
        </div>
    </div>
  )
}

export default Navbar
