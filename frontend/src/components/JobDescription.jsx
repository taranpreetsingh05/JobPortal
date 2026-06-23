import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { JOB_API_END_POINT,APPLICATION_API_END_POINT } from "../utils/constant";
import { setSingleJob } from "../redux/jobSlice";
import { toast } from "sonner";
function JobDescription() {
  const params=useParams();
  const jobId=params.id;
  const {singleJob}=useSelector(store=>store.job);
  const {user}=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const isInitiallyApplied=singleJob?.applications?.some(application=>application.applicant==user?._id)|| false;
  const [isApplied,setIsApplied]=useState(isInitiallyApplied);
  const applyJobHandler=async ()=>{
    try {
      const res=await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
      
      if(res.data.success){
        setIsApplied(true);//update the local state
        const updateSingleJob={...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]};
        dispatch(setSingleJob(updateSingleJob));//helps us to update ui in real time
        toast.success(res.data.msg);
      }
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response?.data);
}
  }
  useEffect(()=>{
    const fetchSingleJobs=async()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
                setIsApplied(res.data.job.applications.some(application=>application.applicant==user?._id))//ensure that the state is in sync with the fetched data
              console.log(res.data.job.applications);

              }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJobs();
  },[jobId,dispatch,user?._id])
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex ites-center justify-between">
        <div>
      <h1 className="font-bold text-xl">{singleJob?.title}</h1>
      <div className="flex items-center gpa-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {singleJob?.position}
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {singleJob?.jobType}
        </Badge>
        <Badge className="text-[#7289b7] font-bold" variant="ghost">
          {singleJob?.salary}
        </Badge>
        </div>
      </div>
      <Button onClick={isApplied?null:applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied?'bg-gray-500 cursor-not-allowed':' hover:bg-[#5f32ad]'}`}>{isApplied? 'Applied':'Apply Now'}</Button>
    </div>
    <h1 className="border-b-2 border-b-gray-300 font-md py-4">Job Description</h1>
    <div className="my-4">
      <h1 className="font-bold my-1">
        Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span>
      </h1>
      <h1 className="font-bold my-1">
        Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span>
      </h1>
      <h1 className="font-bold my-1">
        Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span>
      </h1>
      <h1 className="font-bold my-1">
        Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experience}</span>
      </h1>
      <h1 className="font-bold my-1">
        Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}</span>
      </h1>
      <h1 className="font-bold my-1">
        Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>
      </h1>
      <h1 className="font-bold my-1">
        Posted date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt?.split("T")[0]}</span>
      </h1>
    </div>
    </div>
  );
}

export default JobDescription;
