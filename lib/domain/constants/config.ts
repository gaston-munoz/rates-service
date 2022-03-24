export const config = Object.freeze({
    exchange: {
        baseUrl: process.env.EXCHANGE_BASE_URL,
        baseCurrency: 'EUR',
        accessKey: process.env.EXCHANGE_ACCESS_KEY,
        timeout: 15000,
        headers: {'Content-Type': 'application/json'} ,
    }
})