import {listBalance,getBalanceById,createBalance,updateBalance,deleteBalance} from "../controllers/BalanceController.js"
import { Router } from "express";

const balanceRouter = Router()

balanceRouter.get("/balance", listBalance);
balanceRouter.get("/balance/:id",getBalanceById);
balanceRouter.post("/balance", createBalance);
balanceRouter.put("/balance/:id",updateBalance);
balanceRouter.delete("/balance/:id",deleteBalance);

export default balanceRouter;