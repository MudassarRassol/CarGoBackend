import express from "express";
import { addbrand, addcar, getAllCars } from "../controller/car.controller.js";
import upload from "../middleware/upload.js";
import { brandValidation } from "../middleware/validation/car.validation.js";
const carroutes = express.Router();

carroutes.get('/allcars',getAllCars)
carroutes.post( '/addcar',upload.array('images', 5),addcar);
carroutes.post( '/addbrand',upload.array('image', 1),brandValidation,addbrand);

// carroutes.post('/login',loginValidation,logincontroller)

export default carroutes

