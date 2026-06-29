import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';
import UseGetAllJobs from '../hooks/UseGetAllJobs';
function Browse() {
  const dispatch=useDispatch();
  const {allJobs}=useSelector(store=>store.job);
  UseGetAllJobs();
  useEffect(()=>{
    return ()=>{
      dispatch(setSearchedQuery(""));
    }
  })
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10 '>
        <h1 className=' font-bold text-xl'>
            Search Results:({allJobs.length})
        </h1>
        <div className='grid grid-cols-3 gap-10  mt-10'>

        
            {
                allJobs.map((job)=>{
                    return (
                        <Job key={job._id} job={job}/>
                    )
                })
            }
            </div>
        
      </div>
    </div>
  )
}

export default Browse
