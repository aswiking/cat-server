import express from "express";
import cuid from 'cuid';
import validateSchema from '../schema-validation.js';
import catSchema from './cat-schema.js';

const router = express.Router();

let cats = [
  {
    id: 1,
    name: "Jeff",
    size: "Chonk",
    mood: "Lazy",
    imageLocation: "https://i.redd.it/i16yz1oooea21.jpg"
  },
  {
    id: 2,
    name: "Susu",
    size: "Smol",
    mood: "Friend",
    imageLocation: "https://ibb.co/nnSMvsV"
  },
  {
    id: 3,
    name: "Saga",
    size: "Chonk",
    mood: "Grumpy",
    imageLocation: "https://ibb.co/g4QzPjz"
  }
];

router.get("/api/cats", (req, res) => {
  res.status(200).json(cats); // how to respond to get requests. The 200 is the status code and the 'cats' is the body
});

router.post("/api/cats", validateSchema(catSchema), (req, res) => {
  const cat = {
    id: cuid(),
    name: req.validatedBody.name,
    size: req.validatedBody.size,
    mood: req.validatedBody.mood,
    imageLocation: req.validatedBody.imageLocation
  }
  cats.push(cat);
  res.status(201).json(cat) //sets the response status to be a 201 and the body to be 'cat'?
})

export default router;