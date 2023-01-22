import {listWallet,getWalletById,createWallet,updateWallet,deleteWallet} from "../controllers/WalletController.js"
import { Router } from "express";

const walletRouter = Router()

balanceRouter.get("/wallet", listWallet);
balanceRouter.get("/wallet/:id",getWalletById);
balanceRouter.post("/wallet", createWallet);
balanceRouter.put("/wallet/:id",updateWallet);
balanceRouter.delete("/wallet/:id",deleteWallet);

export default walletRouter;