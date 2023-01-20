import {MongoClient} from 'mongodb';
import dotenv from "dotenv";

dotenv.config()

const MongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try{
    await MongoClient.connect()
    db = MongoClient.db()
}catch(error){
    console.log("Ocorreu um erro no server")
}

export default db