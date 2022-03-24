import { Server } from '@hapi/hapi'
import { ratesCtlr } from '../controllers'
import { ratesSchema } from '../../validators/rates'
import { feeSchema } from '../../validators/addFeeRate'

export const ratesRoute = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/api/rates',
        handler: ratesCtlr.findAll,
    })

    server.route({
        method: 'POST',
        path: '/api/rates',
        handler: ratesCtlr.createRate,
        options: {
            validate: {
                payload: ratesSchema,
            }
        }
    })

    server.route({
        method: 'POST',
        path: '/api/rates/{id}/fee',
        handler: ratesCtlr.addFeeToRate,
        options: {
            validate: {
                payload: feeSchema,
            }
        }
    })
}