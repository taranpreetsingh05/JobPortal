import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
function ApplicantsTable() {
  const shortListingStatus = ["Accepted", "rejected"];
  return (
    <div>
      <Table>
        <TableCaption>A List of Applied students</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>ContactNo.</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
            
              <TableCell>FullName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>ContactNo.</TableCell>
              <TableCell>Resume</TableCell>
              <TableCell>Date</TableCell>
              <TableCell className="float-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal></MoreHorizontal>
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    {shortListingStatus.map((status, index) => {
                      return (
                        <div key={index} className="flex w-fit items-center my-2  cursor-pointer">
                          <span>{status}</span>
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              </TableCell>
            
          </TableRow>
          </TableBody>
        
      </Table>
    </div>
  );
}

export default ApplicantsTable;
