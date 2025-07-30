import cloudinary from "../config/cloudniary.js";

export const uploadImages = async(file)=>{
    if(!file){
        throw new Error("No files uploaded"); 
    }

    const upload = await Promise.all(
        file.map(async (files)=>{
            const res  = await cloudinary.uploader.upload(file.path)
            const publicId  = res.public_id;
            return{
                small : cloudinary.url(publicId,{width: 200 , crop  : 'fill'}),
                medium : cloudinary.url(publicId,{width: 600 , crop  : 'fill'}),
                large : cloudinary.url(publicId,{width: 1200 , crop  : 'fill'})
            }
        })
    )

    return {
        thumbnail : upload[0],
        gallery : upload.slice(1)
    }

}