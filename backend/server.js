const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
const cors = require ('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
const port = 3000;


// Database connection 
const DB =
  "mongodb+srv://diljeet:Spell1144@cluster0.lne8q4b.mongodb.net/demo?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));




app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use("/api", indexRouter);


// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
