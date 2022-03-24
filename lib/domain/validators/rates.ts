import Joi from 'joi'
import { PAIRS_ALLOWED } from '../constants'

export const ratesSchema = Joi.object({
    pair: Joi.string().allow(...PAIRS_ALLOWED).only().required(),
})