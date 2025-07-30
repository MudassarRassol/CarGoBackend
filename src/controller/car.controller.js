import { loginService, signupService } from "../services/auth.service.js"
import { addcarService, getAllCarsService } from "../services/car.service.js";
import { errorResponse, successResponse } from "../services/response.service.js";

export const getAllCars = async(req,res)=>{
    try {
        const cars = await  getAllCarsService()
        return successResponse(res, cars, 201, "Cars Fetched Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}


export const addcar = async(req,res)=>{
    const data =  {
        ...req.body,
        userId : req.userId
    }
    try {
        const cars = await  addcarService(data)
        return successResponse(res, cars, 201, "Cars Added Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}

