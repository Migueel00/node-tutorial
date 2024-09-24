// index js
require('dotenv').config()
const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const mongodbRoute  = process.env.MONGO_DB_STRING;

// router
const workoutRouter = require('./routes/workoutRoutes');

const app   = express();
const PORT  = process.env.PORT || 3000;

// Use bodyparser
app.use(bodyParser.json());
app.use("/api/workouts", workoutRouter);

async function start(){
    try{
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conexion con Mongo Correcta');
    } 
    catch(error){
        
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }  
}

start();