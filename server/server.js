const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
/* Don't Remove Import db connection */
const mongoose = require("./src/config/db");

const requirementContoller = require("./src/controller/requirement.controller");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use("/", requirementContoller);

app.listen(PORT, () => {
  console.log(`Server listening at the PORT: ${PORT}`);
});
