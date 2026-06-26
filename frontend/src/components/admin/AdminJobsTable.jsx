import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminJobsTable() {
  const navigate=useNavigate();
const {allAdminJobs = [], searchJobByText} = useSelector(store => store.job);
const [filterJobs, setFilterJobs] = useState([]);
  console.log("allAdminJobs:", allAdminJobs);
console.log("Is array?", Array.isArray(allAdminJobs)); 
  useEffect(()=>{
    const filteredJobs=allAdminJobs.length>=0 && allAdminJobs.filter((job)=>{
      if(!searchJobByText){return true};
      return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
    });
    setFilterJobs(filteredJobs);
  },[allAdminJobs,searchJobByText])
  return (
    <div>
      <div className="px-40">
        <Table>
          <TableCaption>
            a list of your recent Posted Jobs
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              filterJobs.map((job) => (
                <TableRow key={job._id}>
                  

                  <TableCell>{job?.company?.name}</TableCell>
                  <TableCell>{job?.title}</TableCell>

                  <TableCell>{job.createdAt.split("T")[0]}</TableCell>

                  <TableCell className="cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>

                      <PopoverContent className="w-32">
                        <div onClick={()=>{
                          navigate(`/admin/companies/${job._id}`)
                        }} className="flex items-center gap-2 cursor-pointer">
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminJobsTable;
