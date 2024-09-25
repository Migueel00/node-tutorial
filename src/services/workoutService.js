
const Workout = require('../database/Workout');

const getAllWorkouts = async () => {
    try {
        const allWorkouts = Workout.getAllWorkouts();
        return allWorkouts;
    }
    catch (error){
        throw error;
    }
}

const getOneWorkout = async (workoutId) => {

    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
    }
    catch (error){
        
        throw error;
    }
}

const createNewWorkout = async (newWorkout) => {

    try {
        const  createdWorkout    = Workout.createNewWorkout(newWorkout);
        return createdWorkout;
    }
    catch (error){

        throw error
    }
}

const updateOneWorkout = async(workoutId, changes) => {
    
    try {
        const updateWorkout = Workout.updateOneWorkout(workoutId, changes);
        return updateWorkout;
    }
    catch (error){

        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout
}