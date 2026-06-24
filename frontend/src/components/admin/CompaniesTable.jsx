import React from "react";
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
import { Popover,PopoverContent,PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { Edit2 } from "lucide-react";
function CompaniesTable() {
  return (
    <div>
        <div className="px-40">
      <Table>
        <TableCaption>a list of your recent registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>20-06-26</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className="w-32">
                    <div className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2></Edit2>
                        <span className="w-4">Edit</span>
                    </div>
                </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
      </div>
    </div>
  );
}

export default CompaniesTable;
