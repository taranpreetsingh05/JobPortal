import axios from 'axios'
import React, { useEffect } from 'react'
import {  JOB_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setAllAdminJobs, } from '../redux/jobSlice'

function UseGetAllAdminJobs() {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchJobs=async()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
            if(res.data.success){
    console.log("jobs type:", typeof res.data.jobs, Array.isArray(res.data.jobs));
    console.log("jobs value:", res.data.jobs);
    dispatch(setAllAdminJobs(res.data.jobs));
}
        } catch (error) {
            console.log(error);
        }
    }
    fetchJobs();
  },[]);
}

export default UseGetAllAdminJobs;
