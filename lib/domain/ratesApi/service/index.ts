import RatesRepository from '../repository'
import { IRates } from './types'
import { ExchangeService } from '../../../infrastructure/services/Exchange'
import { config } from '../../constants/config'
import { Pair } from '../../../infrastructure/storage/models/rates/types'


const create = async (rate: IRates) => {
    const exchangeService = new ExchangeService()

    const originalRate = await exchangeService.getRate(rate.pair as Pair)
    const rateTosave: any = {
        pair: rate.pair,
        originalRate, 
    }

    return RatesRepository.add(rateTosave)
}

const addFee = async (id: string, fee: number) => {
    const rate = await RatesRepository.findById(id)
    if (!rate) {
        throw Error('Rate Not Exists')
    }

    const feeAmount = fee * rate.originalRate
    const totalRate = feeAmount + rate.originalRate
    return RatesRepository.findAndUpdate(id, { fee, feeAmount, totalRate })
}

const findAll = () => RatesRepository.findAll()

const RatesService = {
    create,
    addFee,
    findAll,
}

export default RatesService