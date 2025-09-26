const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/game", require("./routes/game"));
app.use("/api/dashboard", require("./routes/dashboard"));

module.exports = app;
