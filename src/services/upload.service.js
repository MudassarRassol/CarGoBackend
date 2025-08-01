import cloudinary from "../config/cloudniary.js";
import { deleteUploadedFile } from "../middleware/del.image.js";

export const uploadImages = async(file)=>{
    if(!file){
        throw new Error("No files uploaded"); 
    }


    console.log(file)

    const upload = await Promise.all(
        file.map(async(file)=>{
             console.log(file)
            const res  = await cloudinary.uploader.upload(file.path)
            if(res){
                deleteUploadedFile(file.filename);
            }
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