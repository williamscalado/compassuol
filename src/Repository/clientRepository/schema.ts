import mongoose from "mongoose";
import { Schema } from "mongoose"
import { IClient } from "../../Interface/clientInterface";

const clientSchema= new Schema<IClient>({
    name: {
        type: String,
        lowercase: true
    },
    lastName: {
        type: String,
        lowercase: true
    },
    gender: String,
    birthdayDate: Date,
    email: {
        type: String,
        lowercase: true
    },
    password: String,
    age: String,
    idCity: String,
    createAt: Date
});


export const clientSchemaReopository = mongoose.model('client' , clientSchema)