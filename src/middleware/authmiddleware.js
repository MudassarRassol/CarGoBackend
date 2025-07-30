import jwt from "jsonwebtoken"

export const authentication = (req,res,next) => {
    const auth = req.headers.authorization;
    console.log(auth)
    if(!auth || !auth.startsWith('Bearer ')){
        return res.status(400).json({
            message : "No Token Provide"
        })
    }

    const Token = auth.split(" ")[1];
    try {
        console.log(Token)
        const decode = jwt.verify(Token,process.env.JWT_SECRET);
        req.userId = decode.userId;
        next()
    } catch (error) {
       console.error("JWT verification error:", error);
  return res.status(400).json({
    message: "Invalid Token",
    error: error.message, // helpful for debugging
  });
    }

}