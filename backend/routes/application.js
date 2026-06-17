const express=require("express");
const { getAppliedJobs,applyJob, getApplicants, updateStatus }=require("../controllers/application");
const{isAuthenticated}=require("../middlewares/isAuthenticated");
const router=express.Router();


router.get("/apply/:id",isAuthenticated,applyJob);
router.get("/get",isAuthenticated,getAppliedJobs);
router.get("/applicants/:id",isAuthenticated,getApplicants);
router.put("/status/update/:id",isAuthenticated,updateStatus); 

module.exports=router;