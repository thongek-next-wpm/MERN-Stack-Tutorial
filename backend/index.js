const express = require("express"); // Import the Express library
require("dotenv").config(); // Load environment variables from .env file
const wokoutRoutes = require("./routers/Workout"); // Import workout routes
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction

// Create an Express application
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Use workout routes for any requests to /api/workouts
app.use("/api/workouts", wokoutRoutes);

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB", process.env.MONGO_URI);
  })
  .catch((error) => {
    console.log(error);
  });

// Define a route for the root URL
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// listen on port 3000
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});
