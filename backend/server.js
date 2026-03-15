require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// API routes
const routes = require("./routes.js");
app.use("/api", routes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Catch-all: serve index.html for any non-API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ EasyLiving server running at http://localhost:${PORT}`);
});
