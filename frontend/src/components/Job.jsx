import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
function Job() {
  const navigate=useNavigate();
  const jobId="78984u99";
  return (
    <div className='border rounded-md border-gray-200 shadow-xl bg-white p-5 '>
        <div className='flex justify-between items-center'>
      <p className='text-sm text-gray-500'>2 days ago</p>
      <Button variant='outline' className='rounded-full' size='icon'>
        <Bookmark/>
      </Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
      <Button variant='outline' size='icon' className='rounded-full p-6'>
      <Avatar>
        <AvatarImage src='https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All'/>
      </Avatar>
      </Button>
      <div>
        <h1 className='font-bold'>Company name</h1>
        <p>India</p>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsa nobis, facere dolorem eum cumque?</p>
      </div>
      <div className="flex items-center gpa-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#7289b7] font-bold" variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
