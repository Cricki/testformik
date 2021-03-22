const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Its running ;^) ");
});

app.post("/login", (req, res, next) => {
  console.log(req.body);

  res.json("yope");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
