const config =require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Mock server is running");
});
app.get("/about", (req, res) => {
  res.send("Mock server is running About");
});

app.use((req, res) => {
  res.status(404).send("Can not find");
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
