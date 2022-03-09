import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ICity } from "../../Interface/cityInterface";


const citySchema = new Schema<ICity>({
    name: String,
    stateId: String,
    active: Boolean,
    createAt: Number
}) 

export const citySchemaRepository = mongoose.model('city', citySchema)

