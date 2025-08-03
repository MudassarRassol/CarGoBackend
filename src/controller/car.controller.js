import { loginService, signupService } from "../services/auth.service.js"
import { addbrandService, addcarService, getAllCarsService } from "../services/car.service.js";
import { errorResponse, successResponse } from "../services/response.service.js";
import { uploadImages } from "../services/upload.service.js";

export const getAllCars = async(req,res)=>{
    
    try {
        const cars = await  getAllCarsService()
        return successResponse(res, cars, 201, "Cars Fetched Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}


export const addcar = async(req,res)=>{

     if (!req.files || !Array.isArray(req.files)) {
        throw new Error("No images uploaded");
      }

      const images = await uploadImages(req.files);
      req.body.media = images; // Attach processed image URLs to req.body

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

export const addbrand = async(req,res)=>{

     if (!req.files) {
        throw new Error("No images uploaded");
      }

      const images = await uploadImages(req.files);
      req.body.media = images; // Attach processed image URLs to req.body

    const data =  {
        ...req.body,
        userId : req.userId
    }
    try {
        const Brand = await  addbrandService(data)
        return successResponse(res, Brand, 201, "Brand Added Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}
