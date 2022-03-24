import { Schema, Document, model } from "mongoose"

const ratesSchema = new Schema({
    pair: { type: String, required: true, trim: true },
    originalRate: { type: Number, required: true },
    fee: Number,
    feeAmount: Number,
    totalRate: Number,
},
{
    timestamps: true,
})

export default model('Rates', ratesSchema)