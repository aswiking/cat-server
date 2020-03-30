import express from "express";
import catRouter from './routers/cat-router.js';
import errorHandlingMiddleware from './error-handling-mw.js';

const app = express();

app.use(express.json());

app.use(catRouter);

app.use(errorHandlingMiddleware)

app.listen(8080, () => console.log("Server is listening on port 8080"));

