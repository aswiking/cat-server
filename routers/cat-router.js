const router = express.Router();

app.get("api/posts", (req, res) => {
  // how to handle a get request
  res.status(200).send("this is the response");
});

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

router.get("api/cats", (req, res) => {
  res.status(200).json(cats);
});
