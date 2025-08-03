import e from "express"
import authroutes from "./auth.route.js";
import { authentication } from "../middleware/authmiddleware.js";
import { getusercontroller } from "../controller/user.controller.js";
import carroutes from "./car.route.js";
import locationroutes from "./location.route.js";

const router = e.Router()

router.use('/auth',authroutes)
router.use('/cars',authentication,carroutes)
router.use('/location',authentication,locationroutes)
export default router;