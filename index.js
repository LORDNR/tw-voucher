const express = require("express");
const cors = require("cors");
const routes = require("./routes/tw.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    status: "Success",
  });
});

app.use("/", routes);

app.listen(process.env.PORT || 3007, () => {
  console.log("Welcome to server");
});
