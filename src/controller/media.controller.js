import { uploadImages } from "../services/upload.service";

export const mediacontroller = async (req, res) => {
  try {
    const media = await uploadImages(data);
    req.body.media = media;
    next();
  } catch (error) {
    console.log("upload failed",error)
     return res.status(400).json({
        success : false,
        error : error.message
    })
  }
};
