import { body, validationResult } from "express-validator";

export const locationValidation = [
  body('city').notEmpty().withMessage("city is required"),
  body('state').notEmpty().withMessage("state is required"),
  body('country').notEmpty().withMessage("country is required"),
  body('latitude').notEmpty().withMessage("latitude is required"),
  body('longitude').notEmpty().withMessage("longitude is required"),


   (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

