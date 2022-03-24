import axios from 'axios'
import { config } from '../../../domain/constants/config'
import { DEFAULT_SEPARATOR_PAIRS } from '../../../domain/constants'
import { Pair } from '../../storage/models/rates/types'

export class ExchangeService {
    private baseUrl
    private accessKey
    private request
    private serviceBaseCurrency

    constructor() {
        this.baseUrl = config.exchange.baseUrl
        this.accessKey = config.exchange.accessKey
        this.request = axios.create({ 
            baseURL: this.baseUrl, 
            timeout: config.exchange.timeout, 
            headers: config.exchange.headers,
        })
        this.serviceBaseCurrency = config.exchange.baseCurrency
    }

    async getAllRates() {
        const response = await this.request.get(`/latest?access_key=${this.accessKey}`)
        return response.data
    }

    async getRate(pair: Pair) {
        const [ baseCurrency, currency ] = pair.split(DEFAULT_SEPARATOR_PAIRS)

        if (baseCurrency === this.serviceBaseCurrency) {
            const rates = await this.getRateByBase(currency)
            const originalRate = rates[currency]
            return originalRate
        }

        const baseCurrencyRate = await this.getRateByBase(baseCurrency)
        const currencyRate = currency === this.serviceBaseCurrency ? 1 : await this.getRateByBase(currency)

        return currencyRate[currency] / baseCurrencyRate[baseCurrency]
    }

    async getRateByBase(currency: string) {
        const { data } = await this.request.get(`/latest?access_key=${this.accessKey}&symbols=${currency}`)
        return data.rates
    }


}