import { signupService } from "../services/auth.service.js"
import { errorResponse, successResponse } from "../services/response.service.js";

export const signupcontroller = async(req,res)=>{
    try {
        const user = await signupService(req.body);
        const {password , ...userifo} = user; 
        return successResponse(res, user, 201, "User Created");
    } catch (error) {
        return errorResponse(res,error)
    }
}


export const logincontroller = async(req,res)=>{
    try {
        const user = await loginService(req.body);
        const {password , ...userifo} = user; 
        return successResponse(res, user, 201, "User Created");
    } catch (error) {
        return errorResponse(res,error)
    }
}