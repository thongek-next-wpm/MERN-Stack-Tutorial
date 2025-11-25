const express = require("express");
const Workut = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// Define a route to get all workouts
router.get("/", getWorkouts);

// get a single workout by ID
router.get("/:id", getWorkout);

// Create a new workout
router.post("/", createWorkout);

// Delete a workout by ID
router.delete("/:id", deleteWorkout);

// Update a workout by ID
router.patch("/:id", updateWorkout);

module.exports = router;
