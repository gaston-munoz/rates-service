import Joi from 'joi'

export const feeSchema = Joi.object({
    fee: Joi.number().required().positive(),
})