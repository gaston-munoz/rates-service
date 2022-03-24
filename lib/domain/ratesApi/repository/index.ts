import Rates from '../../../infrastructure/storage/models/rates'
import { IRates } from '../service/types'

const findById = async (id: string) => {
    return Rates.findOne({ _id: id })
}

const findAll = () => {
    return Rates.find()
}

const add = (rates: IRates) => {
    const newRates = new Rates(rates)
    return newRates.save()
}

const findAndUpdate = (id: string, params: IRates) => {
    return Rates.findOneAndUpdate({ _id: id }, params, { new: true })
}

const ProviderRepository = {
    findById,
    add,
    findAndUpdate,
    findAll,
}

export default ProviderRepository
