import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
function Job({job}) {
  const navigate=useNavigate();
  const daysAgo=(mongodbTime)=>{
    const createdAt=new Date(mongodbTime);
    const currentTime=new Date();
    const timeDiff=currentTime-createdAt;
    return Math.floor(timeDiff/(1000*24*60*60));
  }
  return (
    
    <div className='border rounded-md border-gray-200 shadow-xl bg-white p-5 '>
        <div className='flex justify-between items-center'>
      <p className='text-sm text-gray-500'>{daysAgo(job?.createdAt)==0?"Today":`${daysAgo(job?.createdAt)} days ago`}</p>
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
        <h1 className='font-bold text-xl'>{job?.company?.name}</h1>
        <p className='text-gray-400 text-sm'>India</p>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className="flex items-center gpa-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7289b7] font-bold" variant="ghost">
          {job?.salary}
        </Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
