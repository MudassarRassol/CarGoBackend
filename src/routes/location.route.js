import express from "express";
import { locationValidation } from "../middleware/validation/location.validation";
import { addlocation, getlocation } from "../controller/location.controller";

const locationroutes = express.Router();


locationroutes.get("/",getlocation)
locationroutes.post("/",locationValidation,addlocation)

export default locationroutes

