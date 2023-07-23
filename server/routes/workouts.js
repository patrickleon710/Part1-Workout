const express = require('express')

const router = express.Router()


const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutControllers')

//GET all workouts

router.get('/', getWorkouts)

//GET a single workout

router.get('/:id', getWorkout)

//POST a new workout

router.post('/', createWorkout)

//UPDATE a single workouts

router.patch('/:id', updateWorkout)

//DELETE a single workouts

router.delete('/:id', deleteWorkout)

module.exports = router