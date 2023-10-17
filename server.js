import express from 'express';
import sequelize from './models/paciente.js';
import definePacienteModel from './models/paciente.js'; // Ajusta la ruta relativa según tu estructura de carpetas

const app = express();

// Middleware
app.use(express.json());



// Define el modelo Paciente
const Paciente = definePacienteModel(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado');
  })
  .catch((err) => {
    console.log('No se conectó');
  });

// Crear un paciente utilizando el modelo Paciente
Paciente.create({ nombre: 'Juan', dni: 123456 })
  .then((paciente) => {
    console.log('Paciente creado:', paciente.toJSON());
  })
  .catch((error) => {
    console.error('Error al crear paciente:', error);
  });

  // "cookie-parser": "~1.4.4",
// "debug": "~2.6.9",
// "express": "~4.16.1",
// "http-errors": "~1.6.3",
// "jade": "~1.11.0",
// "morgan": "~1.9.1"