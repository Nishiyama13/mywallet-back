import joi from 'joi';

export const walletSchema = joi.object({
    value: joi.string().regex(/^-?\d{1,4}(,\d{3})*(\.\d+)?$/).required(),
    description: joi.string().required()
})