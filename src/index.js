import express from "express";
import catRouter from '../routers/cat-router.js';

const app = express();

app.listen(8080, () => console.log("Server is listening on port 8080"));

app.use(catRouter);