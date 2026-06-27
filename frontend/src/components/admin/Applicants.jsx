import React from 'react'
import ApplicantsTable from "./ApplicantsTable"

import Navbar from '../shared/Navbar'
function Applicants() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-2xl my-5'>Applicants(3)</h1>
        <ApplicantsTable></ApplicantsTable>
      </div>
    </div>
  )
}

export default Applicants
