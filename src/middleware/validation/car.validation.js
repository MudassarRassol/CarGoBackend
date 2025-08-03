import { body, validationResult } from "express-validator";

export const brandValidation = [
  body('name').notEmpty().withMessage("Name is required"),

  // Middleware to handle validation result
  (req, res, next) => {
    if(!req.files){
        return res.status(400).json({error : 'Brand Pic is Required'})   
    }
    next();
  },
   (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

