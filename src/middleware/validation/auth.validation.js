import { body, validationResult } from "express-validator";

export const signupValidation = [
  body('fullName').notEmpty().withMessage("fullName is required"),
  body('email').isEmail().withMessage("Invalid email"),
  body('password').isLength({ min: 6 }).withMessage("Password too short"),
  body('country').notEmpty().withMessage("country is required"),
  body('phone').notEmpty().withMessage("phone is required"),
  body('role').notEmpty().withMessage("role is required"),

  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const loginValidation = [

  body('email').isEmail().withMessage("Invalid email"),
  body('password').notEmpty().withMessage("Password is required"),


  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
