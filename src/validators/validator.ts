import Joi from "joi";

export const validator = Joi.object(
    {
        username: Joi.string().required(),
        password: Joi.string().required(),
    }
)

// pattern(/w{4,}/)
// min(1).max(12)