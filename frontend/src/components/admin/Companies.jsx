import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import UseGetAllCompanies from '../../hooks/UseGetAllCompanies'
import { useDispatch } from 'react-redux'
import {setSearchCompanyByText} from "../../redux/companySlice"
function Companies() {
  UseGetAllCompanies();
  const [input,setInput]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
useEffect(()=>{
   dispatch(setSearchCompanyByText(input));
},[input])
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl flex justify-between mx-auto my-10'>
        <Input className="w-fit" onChange={(e)=>{
          setInput(e.target.value); 
        }} placeholder="filter by name"/>
        <Button onClick={()=>{navigate("/admin/companies/create")}}>New Company</Button>
      </div>
      <div>
        <CompaniesTable></CompaniesTable>
      </div>
    </div>
  )
}

export default Companies
