import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
function AplliedJobTable() {
  const {allAppliedJobs}=useSelector(store=>store.job);
  return (
    <div>
      <Table>
        <TableCaption>
            A list of your applied jobs
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead  className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
              allAppliedJobs.length<=0 ?<span>You have not applied anywhere</span>:
                allAppliedJobs.map((applied)=>{
                   return <TableRow key={applied._id}>
                        <TableCell>{applied?.createdAt.split("T")[0]}</TableCell>
                        <TableCell>{applied?.job.title}</TableCell>
                        <TableCell>{applied.job.company.name}</TableCell>
                        <TableCell className="text-right"><Badge className={`${applied.status==="rejected"?'bg-red-400':applied.status==='pending'?'bg-gray-400':'bg-green-400'}`}>{applied.status.toUpperCase()}</Badge></TableCell>
                    </TableRow>
                })
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AplliedJobTable
