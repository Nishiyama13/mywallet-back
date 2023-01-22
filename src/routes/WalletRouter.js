import {listWallet, inputValue, outputValue} from "../controllers/WalletController.js"
import { Router } from "express";

const walletRouter = Router()

walletRouter.get("/home", listWallet);
walletRouter.post("/nova-entrada", inputValue);
walletRouter.post("/nova-saida", outputValue);

export default walletRouter;