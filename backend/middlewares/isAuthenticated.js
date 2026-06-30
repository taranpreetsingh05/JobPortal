const  jwt =require("jsonwebtoken");
async function isAuthenticated(req,res,next){
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                msg:"user not authenticated",
                success:false
            })
        }
        const decode=jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                msg:"invalid token",
                success:false
            })
        }
        req.id=decode.userId;
        return next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
                msg:"some error occured",
                success:false
            })
    }
}
module.exports={isAuthenticated};