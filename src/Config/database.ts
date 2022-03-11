import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectMongoDb = async () =>{

    try {
        const userMongo = process.env.USERMONGO
        const passwordMongo = process.env.PASSWORDMONGO
        return await  mongoose.connect(`mongodb+srv://${userMongo}:${passwordMongo}@compassuol.iq18u.mongodb.net/desafio?retryWrites=true&w=majority`)
    
    } catch (e) {

        throw new Error('Database Error!')
    }
    
}
