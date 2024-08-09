const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");

const router = require("./routes/index");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello World!",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
