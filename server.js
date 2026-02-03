const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "core-voice-gateway-test",
    version: "starter",
    time: new Date().toISOString(),
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[START] Listening on port ${port}`);
});
