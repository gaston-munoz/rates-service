import { Document } from "mongoose";

export type Pair = 'EUR-USD' | 'EUR-ARS' | 'EUR-BRL' | 'USD-ARS' | 'USD-BRL' | 'BRL-ARS'

export interface IRates extends Document {
    pair: Pair
    originalRate: number
    fee?: number
    feeAmount?: number
    totalRate?: number
}