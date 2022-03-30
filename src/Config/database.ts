import mongoose from "mongoose";
export const connectMongoDb = async () =>{



        const userMONGO = process.env.USERMONGO
        const passwordMONGO = process.env.PASSWORDMONGO
        const serverMONGO = process.env.SEREVRMONGO

        return await  mongoose.connect(`mongodb://${userMONGO}:${passwordMONGO}@${serverMONGO}`)
        .then(result => {
            console.log('MongoDB Conectado');
          })
          .catch(error => {
            console.log(error);
          });
    
 
    
}
