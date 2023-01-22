import { Router } from "express";
import {signIn,signUp} from "../controllers/AuthController.js";
import { validateSchema } from "../middleware/validateSchema.js"
import { userSchema, loginSchema } from  "../schemas/AuthSchema.js"


const authRouter = Router();

authRouter.post("/cadastro", validateSchema(userSchema), signUp);
authRouter.post("/", validateSchema(loginSchema), signIn);

export default authRouter