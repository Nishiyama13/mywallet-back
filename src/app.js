import express from "express";
import cors from "cors";

const server = express()

server.use(express.json());
server.use(cors());

const PORT = 5000;
server.listen(PORT, ()=> {console.log(`Servidor conectado a porta: ${PORT}`)});