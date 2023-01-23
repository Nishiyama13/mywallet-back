import {listWallet, inputValue, outputValue} from "../controllers/WalletController.js"
import { Router } from "express";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { walletSchema } from "../schemas/WalletSchema.js";
import { validateMiddleware } from "../middleware/validateMiddleware.js"



const walletRouter = Router()

walletRouter.use(authValidation);
walletRouter.get("/home",listWallet);
walletRouter.post("/nova-entrada", validateMiddleware(walletSchema), inputValue);
walletRouter.post("/nova-saida", validateMiddleware(walletSchema), outputValue);

export default walletRouter;