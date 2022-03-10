import mongoose from "mongoose";
import { Schema } from "mongoose";
import { string } from "yup";
import { ICity } from "../../Interface/cityInterface";


const citySchema = new Schema<ICity>({
    name: {
        type: String,
        lowercase: true
    },
    stateId: String,
    active: Boolean,
    createAt: Number
}) 

export const citySchemaRepository = mongoose.model('city', citySchema)

