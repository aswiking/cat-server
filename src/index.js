import express from "express";
import catRouter from './routers/cat-router.js';

const app = express();

app.use(express.json());

app.use(catRouter);

app.listen(8080, () => console.log("Server is listening on port 8080"));

