export type Pair = 'EUR-USD' | 'EUR-ARS' | 'EUR-BRL' | 'USD-ARS' | 'USD-BRL' | 'BRL-ARS'

export interface IRates {
    pair?: Pair
    originalRate?: number
    fee?: number
    feeAmount?: number
    totalRate?: number
}