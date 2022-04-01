const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { check, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
// Using the js files in the routes/api
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/blogs", require("./routes/blogs"));
app.use("/comments", require("./routes/comments"));

app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`Server Listening at Port ${PORT}`));
