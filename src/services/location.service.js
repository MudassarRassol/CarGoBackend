import { prisma } from "../../prisma/client.js"

export const getlocationService = async () => {

    const locations = await prisma.location.findMany();

    return locations

}

export const    addlocationService = async (data) => {
    const location = await prisma.location.create({
        data : {
            city : data.city,
            state : data.state,
            country : data.country,
            latitude : data.latitude,
            longitude : data.longitude
        }
    });

    return location

}

