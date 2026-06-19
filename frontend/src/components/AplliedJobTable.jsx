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
function AplliedJobTable() {
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
                [1,2].map((item,ind)=>{
                   return <TableRow key={ind}>
                        <TableCell>17-07-24</TableCell>
                        <TableCell>Front-End developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                    </TableRow>
                })
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AplliedJobTable
