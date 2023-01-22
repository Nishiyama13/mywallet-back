import db from '../config/database.js';

export async function authValidation(req, res, next){
    const { authorization} = req.headers;
    const token = authorization?.replace("Bearer", '')

    if(!token) return res.status(422).send("Token invalido, informe o Token corretamente.");

    try {
        const checkSession = await db.collection("sessions").findOne({ token });

        if(!checkSession) return res.status(401).send("Você não tem autorização para cadastrar uma movimentação em conta");

        res.locals.session = checkSession;

        next()
        
    } catch(error){
        res.status(500).send(error);
    }
}