const Job=require("../models/job");
const mongoose=require("mongoose");
const Application=require("../models/application");


async function applyJob(req,res){
try{
    const userId=req.id;
    const jobId=req.params.id;
    if(!jobId){
        return res.status(400).json({
            msg:"job id is required",
            success:false
        });
    }
    //check if the user has already applied
    const existingApplication=await Application.findOne({job:jobId,applicant:userId});
    if(existingApplication){
        return res.status(400).json({
            msg:"u have already applied for this job",
            success:false
        })
    }
//check if the job exists
const job=await Job.findById(jobId);
if(!job){
    return res.status(400).json({
            msg:"no such job",
            success:false
        })
}
const newApplication=await Application.create({
    job:jobId,
    applicant:userId,

});
job.applications.push(newApplication._id);
await job.save();
return res.status(200).json({
            msg:"applied for job",
            success:true
        })
}
catch(error){
console.log(error);
}

}
async function getAppliedJobs(req,res){
    try{
        const userId=req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({path:"job"});

    
    if(application.length === 0){
        return res.status(404).json({
            msg:"no applications",
            success:false
        })
    }
    return res.status(200).json({
            application,
            success:true
        })

}
    catch(error){
        console.log(error);
    }
}

//admin dekkhega kitne users ne apply kia
async function getApplicants(req,res){
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:"applications",
            options:{
                sort:{createdAt:-1},
                populate:{
                    path:"applicant"
                }
            }
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
        console.log(error);
    }
}


async function updateStatus(req,res){
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(400).json({
                msg:"status is required",
                success:false
            })
        }
        //find the application by appplication id
        const application=await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                msg:"application not found",
                success:false
            })
        }
        application.status=status.toLowerCase();
        await application.save();
        return res.status(200).json({
                msg:"updated status successfully",
                success:true
            });

    } catch (error) {
        console.log(error);
    }
}

module.exports={applyJob,getAppliedJobs,getApplicants,updateStatus};