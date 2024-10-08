// cargamos el modulo de mongoose
const mongoose = require('mongoose');

// usaremos los esquemas
const { Schema } = mongoose;

// Crearemos el objeto del esquema y sus atributos
const workoutSchema = new Schema({
    name: String,
    mode: String,
    equipment: [String]
});

// Exportamos el modelo para usarlo en otros ficheros

module.exports = mongoose.model('Workout', workoutSchema);

