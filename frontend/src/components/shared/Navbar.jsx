import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { User2, LogOut } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const user = null;
const Navbar = () => {
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
  <AvatarImage src="https://github.com/shadcn.png" />
</Avatar>
  </PopoverTrigger>

  <PopoverContent>
    <div className='flex gap-4 '>
    <Avatar className='cursor-pointer'>
  <AvatarImage src="https://github.com/shadcn.png" />
</Avatar>
<div>
<h4 className='font-medium'>Taran's Portal</h4>
<p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
</div>
</div>
<div>
  <User2/>
  <Button className="focus-visible:ring-0 focus-visible:ring-offset-0" variant='link'>View Profie</Button>
</div>
<div>
  <LogOut/>
<Button className="focus-visible:ring-0 focus-visible:ring-offset-0" variant='link'>Logout</Button>
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
