import { addlocationService } from "../services/location.service";

export const getlocation = async(req,res)=>{
    
    try {
        const cars = await  getAllCarsService()
        return successResponse(res, cars, 201, "Cars Fetched Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}

export const addlocation = async(req,res)=>{
    
    try {
        const {...data} = req.body
        const cars = await  addlocationService(data)
        return successResponse(res, cars, 201, "Cars Fetched Succesfully");
    } catch (error) {
        return errorResponse(res,error)
    }
}