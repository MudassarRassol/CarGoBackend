import e from "express"
import authroutes from "./auth.route.js";

const router = e.Router()

router.use('/auth',authroutes)

export default router;