import express from "express";
import cors from "cors";
import {prisma} from '../prisma/client.js'
import router from "./routes/index.route.js";
const app = express();

app.use(cors({origin:"*"}));


app.use((req,res,next)=>{
    express.json()(req,res,next);
})

app.use('/api',router)
app.get('/',async(req,res)=>{
    try {
        await prisma.$connect()
        res.status(200).send("Database connected");
    } catch (error) {
        res.status(500).send(error);;
    }
})

app.use((req,res,next)=>{
    if(req.originalUrl.includes("api/cars")){
        next();
    }
    else{
        express.json({limit : "1mb"})(req,res,next)
    }
})



const PORT = 3000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})