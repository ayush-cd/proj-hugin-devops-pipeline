const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send(`
    <h2>🎉 Hugin Test App Running Successfully!</h2>
    <p>Secret loaded at runtime:</p>
    <pre>${process.env.REFRESH_TOKEN_SECRET || "❌ No secret found"}</pre>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 App running on port ${PORT}`);
  console.log(`🔐 REFRESH_TOKEN_SECRET loaded from runtime:`, process.env.REFRESH_TOKEN_SECRET);
});
