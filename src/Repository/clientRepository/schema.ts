import mongoose from "mongoose";
import { Schema } from "mongoose"
import { IClient } from "../../Interface/clientInterface";

const clientSchema= new Schema<IClient>({
    name: String,
    lastName: String,
    gender: String,
    birthdayDate: Date,
    email: String,
    password: String,
    age: String,
    idCity: String,
    createAt: Date
});


export const clientSchemaReopository = mongoose.model('client' , clientSchema)