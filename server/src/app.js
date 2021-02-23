const express = require("express");
const cors = require("cors");
const apiRouter = require("./routers/api");
const dataRouter = require("./routers/data")

const app = express();

app.use(cors());
app.use(express.json());
app.use(apiRouter);
// new datamodel routes
app.use(dataRouter)

module.exports = app;
