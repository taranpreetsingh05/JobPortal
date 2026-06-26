const express=require("express");
const Job=require("../models/job");
const mongoose=require("mongoose");
// this is for admin

async function postJob(req,res){
try{
const {title,description,requirements,salary,location,jobType,experience,position,companyId}=req.body;
const userId=req.id;
if(!title || !description || !requirements ||!salary ||!location || !jobType || !experience || !position || !companyId){
    return res.status(400).json({
        msg:"something is missing",
        success:false
    })
}
const job =await Job.create({
    title,
    description,
    requirements:requirements.split(","),
    salary:Number(salary),
    location,
    jobType,
    experience,
    position,
    company:companyId,
    created_by:userId

});
return res.status(200).json({
    msg:"new job created successfully",
    job,
    success:true
})
}
catch(error){
console.log(error);
}
}
// this is for students

async function getAllJobs(req,res){
    try{
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword , $options:"i"}}
                ,{description:{$regex:keyword,$options:"i"}}
            ]
        };
        const jobs=await Job.find(query).populate("company").sort({createdAt:-1});
        if(jobs.length==0){
            return res.status(404).json({
                msg:"jobs not found",
                success:false
            })
        }
         return res.status(200).json({
                jobs,
                success:true
            })
    }
    catch(error){

    }
}
// this is for students
async function getJobById(req,res){
    try {
        const jobId=req.params.id;
        const job = await Job.findById(jobId).populate({
    path: "applications",
    options: { sort: { createdAt: -1 } }
});
        if(!job){
            return res.status(404).json({
                msg:"job not found",
                success:false
            })
        }
        return res.status(200).json({
                job,
                success:true
            })
    } catch (error) {
        
    }

};

// admin ne kitne job banaye hai


async function getAdminJobs(req,res){
   try {const adminId=req.id;
    const jobs= await Job.find({created_by:adminId}).populate({
        path:"company"
    });
    if(jobs.length==0){
         return res.status(404).json({
                msg:"jobs not found",
                success:false
            })
    }
    return res.status(200).json({
                jobs,
                success:true,
                msg:"jobs found",
            })}
            catch(error){
                console.log(error);
            }

}
module.exports={postJob,getAllJobs,getJobById,getAdminJobs};
