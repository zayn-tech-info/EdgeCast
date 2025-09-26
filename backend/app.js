const express = require("express");
const cors = require("cors");
const connectTODB = require("./lib/db");

const authRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth/", authRouter);
connectTODB();

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/game", require("./routes/game"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/users", require("./routes/users"));
app.use("/api/rounds", require("./routes/rounds"));

module.exports = app;
