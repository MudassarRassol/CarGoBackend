import express from "express";
import { logincontroller, signupcontroller } from "../controller/auth.controller.js";
import { loginValidation, signupValidation } from "../middleware/validation/auth.validation.js";
import { loginService } from "../services/auth.service.js";

const authroutes = express.Router();

authroutes.post('/signup',signupValidation,signupcontroller)
authroutes.post('/login',loginValidation,logincontroller)

export default authroutes

