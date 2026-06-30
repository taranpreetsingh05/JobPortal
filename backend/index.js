const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);const cookieParser = require("cookie-parser");
const express=require("express");
const cors = require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const userRoute=require("./routes/user");
const companyRoute=require("./routes/company");
const jobRoute=require("./routes/job");
const applicationRoute=require("./routes/application");
dotenv.config({});



//server connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

const app=express();



// MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
const corsOptions={
    origin:process.env.FRONTEND_SERVER,
    credentials:true
}
app.use(cors(corsOptions));
const PORT=process.env.PORT || 3000;

//API's
app.use("/application",applicationRoute);
app.use("/job",jobRoute);
app.use("/user",userRoute);
app.use("/company",companyRoute);
app.get("/home",(req,res)=>{
    return res.status(200).json({
        msg:"hi from backend"
    })
})


//server
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})