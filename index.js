const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");

//middleware so that the json can be send directly
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

//connection String
mongoose
  .connect(
    "mongodb+srv://mongoseDB:20uCzqP8aa4rAKnA@backenddp.3vbugvw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backenddp"
  )
  .then(() => console.log("Connected to DataBase!"))
  .catch(() => {
    console.log("connection failed");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
