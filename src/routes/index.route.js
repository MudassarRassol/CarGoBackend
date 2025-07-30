import e from "express"
import authroutes from "./auth.route.js";
import { authentication } from "../middleware/authmiddleware.js";
import { getusercontroller } from "../controller/user.controller.js";

const router = e.Router()

router.use('/auth',authroutes)
router.get('/user', authentication, getusercontroller)
export default router;