import express from "express";
import cors from "cors";
import authRouter from "./routes/AuthRouter.js";
import walletRouter from "./routes/WalletRouter.js";

const server = express()

server.use(express.json());
server.use(cors());

server.use([authRouter,walletRouter]);


const PORT = 5000;
server.listen(PORT, ()=> {console.log(`Servidor conectado a porta: ${PORT}`)});