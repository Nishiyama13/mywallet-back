import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from 'uuid';
import db from "../config/database.js"

export async function signUp(req, res){
    const {name, email, password } = req.body;

    const passwordHashed = bcrypt.hashSync(password, 10)

    try {
        //check if email is alredy in use
        const checkEmail = await db.collection("users").findOne({ email });
        if(checkEmail) return res.status(400).send("Email já cadastrado, informe outro email.");

        //insert new user into the database
        await db.collection("users").insertOne({name, email, password: passwordHashed});
        res.status(201).send("Usuário cadastrado com sucesso.");
    } catch(error){
        res.status(500).send(error.message)
    }

}

export async function signIn(req,res){
    const { email, password } = req.body;

    try{
        //check if user exists
        const checkUser = await db.collection("users").findOne({ email });
        if(!checkUser) return res.status(400).send("Usuário ou senha incorretos.");

        //check if the password is correct
        const isCorrectPassword = bcrypt.compareSync(password, checkUser.password);
        if (!isCorrectPassword) return res.status(400).send("Usuário ou senha incorretos.");
        
        //generate token
        const token = uuidV4();

        //check if the user alredy has an active session
        const checkSession = await db.collection("sessions").findOne({idUser: checkUser._id, token});

        if(checkSession) return res.status(400).send("Sessão já existe, desconecte de seu outro dispositivo para se conectar") 

       /*  //expiring time for token
        const expiresIn = 3600; //1 hour
 */
        //insert token on session collection
        await db.collection("sessions").insertOne({ idUser: checkUser._id, token })
       // await db.collection("sessions").insertOne( {idUser: checkUser._id, token,expiresIn})

        return res.status(200).send(token) //devia ter enviado name user tambem {token:token , name:checkUser.name} mas agora ta quebrando front e nao deu tempo
    } catch(error){
        res.status(500).send(error.message);
    }
}

