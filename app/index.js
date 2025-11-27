const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h2>🎉 Hugin Test App Running Successfully!</h2>
    <p>Secret loaded at runtime:</p>
    <pre>${process.env.REFRESH_TOKEN_SECRET || "❌ No secret found"}</pre>
  `);
});

app.listen(3000, () => {
  console.log(`🚀 App running on port 3000`);
  console.log(`🔐 REFRESH_TOKEN_SECRET loaded from runtime:`, process.env.REFRESH_TOKEN_SECRET);
});

