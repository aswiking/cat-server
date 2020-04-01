import express from "express";
import cuid from "cuid";
import validateSchema from "../schema-validation.js";
import catSchema from "./cat-schema.js";

const router = express.Router();

let cats = [
  {
    id: "1",
    name: "Jeff",
    size: "chonk",
    mood: "lazy",
    imageLocation: "https://i.redd.it/i16yz1oooea21.jpg"
  },
  {
    id: "2",
    name: "Susu",
    size: "smol",
    mood: "friend",
    imageLocation: "https://i.ibb.co/hZvFjRn/Susu.jpg"
  },
  {
    id: "3",
    name: "Saga",
    size: "chonk",
    mood: "grumpy",
    imageLocation: "https://i.ibb.co/z6CG7nG/saga.jpg"
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
  };
  cats.push(cat);
  res.status(201).json(cat); //sets the response status to be a 201 and the body to be 'cat'?
});

router.put("/api/cats/:id", validateSchema(catSchema), (req, res) => {
  if (req.params.id !== req.validatedBody.id) {
    throw {
      status: 400,
      messages: "ID in url must match id in body"
    };
  }
  const updatedCat = {
    id: req.params.id, //make errorhandling that checks this equals the req.validatedBody.id
    name: req.validatedBody.name,
    size: req.validatedBody.size,
    mood: req.validatedBody.mood,
    imageLocation: req.validatedBody.imageLocation
  };

  const index = cats.findIndex(cat => cat.id === req.params.id);

  if (index === -1) {
    throw {
      status: 404,
      messages: "There is no cat with this ID"
    };
  }

  cats[index] = updatedCat;

  res.status(200).json(updatedCat);
});

export default router;
