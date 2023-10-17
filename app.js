import express from 'express';
import { urlencoded } from 'express';
// import { join } from 'path';
// import indexRouter from './routes/index.js';
// import usersRouter from './routes/users.js';
import paciente, { sequelize } from './models/paciente.js';
import { Op } from "sequelize";



var app = express();


// view engine setup
app.set('view engine', 'pug');


// app.use(logger('dev'));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.set("views", "vistas");
app.set("view engine", "pug");



// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//Listar pacientes
// app.get("/pacientes", async (req, res) => {
//   // const borrado = req.query.borrado ? req.query.borrado : "";

//   const pacientes = await paciente.findAll();
//   //res.render("pacientes/listar",{pacientes:pacientes, borrado:borrado});
//   res.json(pacientes)
// })


//TEST

app.get('/', async (req, res) => {
  const pacientes = await paciente.findAll();
  res.render('./paciente/paciente', { pacientes });
});

app.get('/buscar', async (req, res) => {
  console.log("nombnreeeee"+req.query.nombre);

  if(req.query.nombre!=undefined||req.query.dni!=undefined){
    const pacientes = await paciente.findAll({
      where: {
        [Op.and]: [
          { nombreCompleto: { [Op.like]: `%${req.query.nombre}%` } } , // Búsqueda por nombre (insensible a mayúsculas/minúsculas)
          { dni: { [Op.like]: `%${req.query.dni}%` } }, // Búsqueda por DNI
        ],
      },
    });
    console.log("nombnreeeee"+pacientes.nombreCompleto);
    res.render('./paciente/paciente', { pacientes});
  }else{
    let pacientes = {}
    res.render('./paciente/paciente', { pacientes});
  }



});

//cargar paciente

app.get("/paciente", (req, res) => {
  res.render("paciente/paciente", {});
}
)

app.get("/agregar", (req, res) => {
  res.render("paciente/agregar", {});
}
)


app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000');
});

export default app;

