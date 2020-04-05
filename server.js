const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
});

// listen requests from cloud database
mongoose
  .connect(
    "mongodb+srv://creadentialapp:VfbiS9WpEqMuqyvl@cluster0-fx5dt.mongodb.net/credapp?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
