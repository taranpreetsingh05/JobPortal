import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Pen } from "lucide-react";
import { Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
const skills = ["html", "css", "node.js", "react.js", "Js"];
import { Label } from "./ui/label";
import AplliedJobTable from "./AplliedJobTable";
function Profile() {
  let isResume = true;
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                et.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail></Mail>
            <span>taran@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact></Contact>
            <span>893745839</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, ind) => {
                return <Badge key={ind}>{item}</Badge>;
              })
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full-max max-w-sm items-center gpa-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://google.com"
              className="text-blue-500 w-full cursor:pointer hover:underline"
            >
              google
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-xl">
        <h1 className="font-bold text-lg my-5">Applied jobs</h1>
        <AplliedJobTable></AplliedJobTable>
      </div>
    </div>
  );
}

export default Profile;
