import { prisma } from "../../prisma/client.js"

export const getAllCarsService = async () => {

    const cars = await prisma.car.findMany({
        include:{
            brand : true,
            owner : {
                select : {
                    id : true,
                    fullName : true,
                    email : true
                }
            }
        }
    });

    if (cars.length === 0) throw new Error("No cars found");

    return cars

}

export const addcarService = async (data) => {

    const cars = await prisma.car.create({
        data : {
            name : data.name,
            subInfo : data.subInfo,
            feature : data.feature,
            onwerId : data.userId,
            brandId : data.brandId,
            media : data.media,
            price : data.price,
            locationId : data.locationId,
            updateAt : new Date()
        }
    });

    if (cars.length === 0) throw new Error("No cars found");

    return cars

}