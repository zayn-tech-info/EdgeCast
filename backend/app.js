const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth/", authRouter);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/game", require("./routes/game"));
app.use("/api/dashboard", require("./routes/dashboard"));

module.exports = app;
