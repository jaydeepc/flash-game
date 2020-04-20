const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


http.listen(PORT, async function () {
  console.log("listening on *: " + PORT);
});

