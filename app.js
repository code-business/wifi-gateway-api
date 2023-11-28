const express = require("express");
const timelineRoutes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api", timelineRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
