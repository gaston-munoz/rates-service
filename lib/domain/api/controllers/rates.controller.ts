import { Request, ResponseToolkit } from '@hapi/hapi'
import { IRates } from '../../../infrastructure/storage/models/rates/types'

import RatesService from '../../ratesApi/service'

const createRate = async (req: Request, h: ResponseToolkit) => {
    try {
        const rateCreated = await RatesService.create(req.payload as IRates)

        return { success: true, rate: rateCreated }
    }
    catch (err: any) {
        return { success: false, error: err.message }
    }
}

const addFeeToRate = async (req: Request, h: ResponseToolkit) => {
    try {
        const { fee } = req.payload as any
        const { id } = req.params

        const rateUpdated = await RatesService.addFee(id, fee)

        return { success: true, rate: rateUpdated }
    }
    catch (err: any) {
        return { success: false, error: err.message }
    }
}


const findAll = async (req: Request, h: ResponseToolkit) => {
    try {
        const allRates = await RatesService.findAll()

        return { success: true, rates: allRates }
    }
    catch (err: any) {
        return { success: false, error: err.message }
    }
}

export const ratesCtlr = {
    findAll,
    createRate,
    addFeeToRate,
}
