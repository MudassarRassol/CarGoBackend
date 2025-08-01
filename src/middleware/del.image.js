// utils/deleteFile.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, "../uploads");

export const deleteUploadedFile = (filename) => {
  const filePath = path.join(uploadDir, filename);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File does not exist:", filePath);
      return;
    }
    fs.unlink(filePath, (unlinkErr) => {
      if (unlinkErr) {
        console.error("Error deleting file:", unlinkErr);
      } else {
        console.log("Deleted file:", filePath);
      }
    });
  });
};
