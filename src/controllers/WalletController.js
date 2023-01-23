import db from "../config/database.js";
import dayjs from "dayjs"

export async function listWallet(req,res){
    try{
        const checkSession = res.locals.session;
        const transactions = await db.collection("wallets").find({_id: checkSession._id}).toArray();
        let balance = 0;

        console.log(transactions);
    

    }catch(error){
        res.status(500).send(error.message);
    }
}

export async function inputValue(req,res){
    const newInputValue = req.body;
    const checkSession = res.locals.session;


    try{
        const dataWallet = await db.collection("wallet").insertOne(
            {idUser: checkSession.idUser, description: newInputValue.description, value:newInputValue.value, data:dayjs().format("DD/MM"), type: "input"})
        console.log(dataWallet)
        res.status(200).send("Fluxo positivo cadastrado") 

    }catch(error){
        res.status(500).send(error.message);
    }
}

export async function outputValue(req,res){
    const newOutputValue = req.body;
    const checkSession = res.locals.session;

    try{
        const dataWallet = await db.collection("wallet").insertOne(
            {idUser: checkSession.idUser, description: newOutputValue.description, value:newOutputValue.value, data:dayjs().format("DD/MM"), type: "output"})
        console.log(dataWallet)
        res.status(200).send("Fluxo negativo cadastrado") 
    }catch(error){
        res.status(500).send(error.message);
    }
}