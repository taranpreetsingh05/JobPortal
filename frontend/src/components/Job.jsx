import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'
function Job() {
  return (
    <div className='border rounded-md border-gray-200 shadow-xl bg-white p-5 '>
        <div className='flex justify-between items-center'>
      <p>2 days ago</p>
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
        <h1>Company name</h1>
        <p>India</p>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsa nobis, facere dolorem eum cumque?</p>
      </div>
    </div>
  )
}

export default Job
