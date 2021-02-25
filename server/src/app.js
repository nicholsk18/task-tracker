const express = require("express");
const cors = require("cors");
const dataRouter = require("./routers/data")

const app = express();

app.use(cors());
app.use(express.json());
app.use(dataRouter)

module.exports = app;
