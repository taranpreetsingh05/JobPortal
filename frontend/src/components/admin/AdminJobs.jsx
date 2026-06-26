import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setsearchJobByText } from "../../redux/jobSlice";import AdminJobsTable from './AdminJobsTable'
import UseGetAllAdminJobs from '../../hooks/UseGetAllAdminJobs'
function AdminJobs() {
  UseGetAllAdminJobs();
  const [input,setInput]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
useEffect(()=>{
   dispatch(setsearchJobByText(input));
},[input])
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl flex justify-between mx-auto my-10'>
        <Input className="w-fit" onChange={(e)=>{
          setInput(e.target.value); 
        }} placeholder="filter by name"/>
        <Button onClick={()=>{navigate("/admin/companies/create")}}>New Jobs</Button>
      </div>
      <div>
        <AdminJobsTable></AdminJobsTable>
      </div>
    </div>
  )
}

export default AdminJobs
