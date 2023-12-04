const express = require("express");
const timelineRoutes = require("./routes/routes");
require("dotenv").config();
const { connectToDatabase } = require("./connect");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api", authenticateToken, timelineRoutes);

// Error handling middleware
function authenticateToken(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Start the server
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(
    `Database connected ${process.env.MONGO_URL}\nServer is running on Port:${PORT}`
  );
});
