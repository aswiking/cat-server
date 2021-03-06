import Joi from "@hapi/joi";

const catSchema = Joi.object({
  id: Joi.string().min(1),
  name: Joi.string()
    .min(1)
    .required(),
  size: Joi.string().required(),
  mood: Joi.string().required(),
  imageLocation: Joi.string().allow("").optional()
});

export default catSchema;
