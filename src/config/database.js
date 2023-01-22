import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try{
    await mongoClient.connect()
    console.log("Conectado ao Mongodb")
    db = mongoClient.db()
}catch(error){
    console.log("Ocorreu um erro no server")
}

export default db