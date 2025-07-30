import express from "express";
import { addcar, getAllCars } from "../controller/car.controller.js";
import { authentication } from "../middleware/authmiddleware.js";
import upload from "../middleware/upload.js";
import { uploadImages } from "../services/upload.service.js";
const carroutes = express.Router();

carroutes.get('/allcars',getAllCars)
carroutes.post('/addcar',authentication,upload.array('images', 5),uploadImages,addcar)
// carroutes.post('/login',loginValidation,logincontroller)

export default carroutes

