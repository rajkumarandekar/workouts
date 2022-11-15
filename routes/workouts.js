const express = require("express");

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router(); // that creates instace of router
router.use(requireAuth);
router.get("/", getWorkouts);

/// GET a single workout
router.get("/:id", getWorkout);

/// POST a new workout
router.post("/", createWorkout); // refernce r here

/// DELETE a new workout
router.delete("/:id", deleteWorkout);

/// patch a new workout
router.patch("/:id", updateWorkout);
module.exports = router;
///  so we ve have created all of our controller functions now we have all of our routes which refernce
// those controller funtions , we have our model for the workout documets and also inside the server we rigister all of
// the routes to this route right here whwre all in server.js /api/workouts/ created apis and all those endpoints seem tobe working now
// then next step crated a frontent app using create-react-app that can iteract with this backend so we can send requests to the different api endpoints to get, post dat etc..
