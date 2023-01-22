import {signIn,signUp} from "../controllers/AuthController.js"
import { Router } from "express"

const authRouter = Router();

authRouter.post("/cadastro", signUp);
authRouter.post("/", signIn);

export default authRouter