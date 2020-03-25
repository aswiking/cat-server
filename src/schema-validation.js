export default function validateSchema(schema) {
  return function middleware(req, res, next) {
    const { value, error } = schema.validate(req.body);
    console.log(req.body)
    if (error) {
      throw {
        status: 400,
        messages: error.details.map(e => e.message)
      };
    }
    req.validatedBody = value;
    console.log(value)
    next();
  };
}
