const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
const cors = require ('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DB =
  "mongodb+srv://diljeet:Spell1144@cluster0.lne8q4b.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use("/api", indexRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

