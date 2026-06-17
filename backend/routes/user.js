const express=require("express");
const {register,login,updateProfile,logout}=require("../controllers/user");
const{isAuthenticated}=require("../middlewares/isAuthenticated");
const  {singleUpload}  = require("../middlewares/multer");
const router=express.Router();


router.post("/register",singleUpload,register);
router.post("/login",login);
router.post("/profile/update",isAuthenticated,updateProfile);
router.get("/logout",logout)

module.exports=router;