const express = require('express');
const router  = express.Router();

const workoutController = require('../controllers/workoutController');

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);
router.post("/", workoutController.createNewWorkout)

module.exports = router;