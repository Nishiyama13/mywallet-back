import joi from 'joi';

export const walletSchema = joi.object({
    value: joi.string().regex(/^-?\d+(,\d{3})*(\.\d+)?$/).required(),
    description: joi.string().required()
})