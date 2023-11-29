const express = require("express");
const timelineRoutes = require("./routes/routes");
require("dotenv").config();
const { connectToDatabase } = require("./connect");
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api", timelineRoutes);

// Error handling middleware

// Start the server
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(
    `Database connected ${process.env.MONGO_URL}\nServer is running on Port:${PORT}`
  );
});
