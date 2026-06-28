import React, { useEffect } from 'react'
import ApplicantsTable from "./ApplicantsTable"
import { APPLICATION_API_END_POINT } from '../../utils/constant'
import Navbar from '../shared/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '../../redux/applicationSlice'
function Applicants() {
  const params=useParams();
  const dispatch=useDispatch();
      const {applicants}=useSelector(store=>store.application);
  
  useEffect(()=>{
    const fetchAllApplicants=async ()=>{
      try {
        const res=await axios.get(`${APPLICATION_API_END_POINT}/applicants/${params.id}`,{withCredentials:true});
        if(res.data.success){
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllApplicants();
  },[]);
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-2xl my-5'>Applicants({applicants.applications.length})</h1>
        <ApplicantsTable></ApplicantsTable>
      </div>
    </div>
  )
}

export default Applicants
