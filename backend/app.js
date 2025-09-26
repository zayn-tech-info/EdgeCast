const express = require("express");
const cors = require("cors");
const connectTODB = require("./lib/db");

const authRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth/", authRouter);
connectTODB();

module.exports = app;
