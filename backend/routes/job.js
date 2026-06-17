const express=require("express");
const {postJob,getAllJobs,getJobById,getAdminJobs}=require("../controllers/job");
const{isAuthenticated}=require("../middlewares/isAuthenticated");
const router=express.Router();


router.post("/post",isAuthenticated,postJob);
router.get("/get",isAuthenticated,getAllJobs);
router.get("/get/:id",isAuthenticated,getJobById);
router.get("/getadminjobs",isAuthenticated,getAdminJobs);


module.exports=router;