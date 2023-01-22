import { Router } from "express";
import {signIn,signUp} from "../controllers/AuthController.js";
import { validateMiddleware } from "../middleware/validateMiddleware.js"
import { userSchema, loginSchema } from  "../schemas/AuthSchema.js"


const authRouter = Router();

authRouter.post("/", validateMiddleware(loginSchema), signIn);
authRouter.post("/cadastro", validateMiddleware(userSchema), signUp);


export default authRouter