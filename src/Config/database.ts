import mongoose from "mongoose";
import { ClientError } from "../modules/client/ClientError";
export const connectMongoDb = async () =>{

    try {
        const options = {
          
            connectTimeoutMS: 10000,
            maxIdleTimeMS: 30000,
            socketTimeoutMS: 120000,

          };
        const userMongo = process.env.USERMONGO
        const passwordMongo = process.env.PASSWORDMONGO
        return await  mongoose.connect(
            `mongodb+srv://${userMongo}:${passwordMongo}@compassuol.iq18u.mongodb.net/desafio?retryWrites=true&w=majority`,
            options)
    
    } catch (e) {

        throw new Error('DB Error')
        
    }
    
}
