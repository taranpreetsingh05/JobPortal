import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
function Companies() {
  const navigate=useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl flex justify-between mx-auto my-10'>
        <Input className="w-fit" placeholder="filter by name"/>
        <Button onClick={()=>{navigate("/admin/companies/create")}}>New Company</Button>
      </div>
      <div>
        <CompaniesTable></CompaniesTable>
      </div>
    </div>
  )
}

export default Companies
