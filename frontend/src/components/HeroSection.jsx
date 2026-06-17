import React from 'react'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
      <span className='mx-auto px-4 py-2 font-medium rounded-full bg-gray-100 text-[#F83002]'>NO.1 Job Hunt website</span>
      <h1 className='text-5xl font-bold'>Search , Apply & <br/> Get Your<span className='text-[#6A38C2]'>Dream Jobs</span></h1>
      <div className='mt-4 flex w-[40%] shadow-lg border border-gray-400 pl-3 rounded-full items-center gap-4 mx-auto'> 
        <input type="text" placeholder='find your dream jobs' className='outline-none border-none w-full'/>
        <Button className='rounded-r-full bg-[#6A38C2]'>
            <Search className='h-5 w-5'/>
        </Button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
