import express from "express";

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

export default router;