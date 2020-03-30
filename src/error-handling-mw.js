export default function errorHandlingMiddleware(err, req, res, next) {
  console.error(err);
  if (err.status) {
    //means it was something we threw
    res.status(err.status).json({
      //sets the status of the response to be the status of the err
      status: err.status,
      messages: [err.messages]
    });
  } else {
    //i.e. something we didn't throw
    res.status(500).json({
      status: 500,
      messages: ["Internal server error"]
    });
  }
}
