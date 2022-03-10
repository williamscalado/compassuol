import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ICity } from "../../../Domain/city";

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

