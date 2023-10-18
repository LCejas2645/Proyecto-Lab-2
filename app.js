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
  console.log("nombnreeeee" + req.query.nombre);

  if (req.query.nombre != undefined || req.query.dni != undefined) {
    const pacientes = await paciente.findAll({
      where: {
        [Op.and]: [
          { nombreCompleto: { [Op.like]: `%${req.query.nombre}%` } }, // Búsqueda por nombre (insensible a mayúsculas/minúsculas)
          { dni: { [Op.like]: `%${req.query.dni}%` } }, // Búsqueda por DNI
        ],
      },
    });
    console.log("nombnreeeee" + pacientes.nombreCompleto);
    res.render('./paciente/paciente', { pacientes });
  } else {
    let pacientes = {}
    res.render('./paciente/paciente', { pacientes });
  }
});

//cargar paciente

app.get("/paciente", (req, res) => {
  res.render("paciente/paciente", {});
}
)

app.get("/agregar", async (req, res) => {
  // const pacienteN = {
  //   nombreCompleto,
  //   dni,
  // } = req.body;

  // const pocientoOBJ = await paciente.create(pacienteN);
  // console.log(pocientoOBJ.toJSON());
  res.render("paciente/agregar", {});
}
)

app.post("/agregar", async (req, res) => {
  console.log(req.body);
  let { nombreCompleto, dni } = req.body;
  const pacienteN = {
    nombreCompleto,
    dni,
  } = req.body;



  const pocientoOBJ = await paciente.create(pacienteN);
  console.log(pocientoOBJ.toJSON());
  res.render("paciente/agregar", {});
}
)


app.get("/actualizar/:id", async (req, res) => {
  const pacienteId = await paciente.findByPk(req.params.id);
  console.log(req.params.id);
  console.log(pacienteId);
  res.render("paciente/actualizar", { pacienteId });
}
)

app.post("/actualizar/:id", async (req, res) => {
  const pacienteId = await paciente.findByPk(req.params.id)

  pacienteId.nombreCompleto = req.body.nombreCompleto;
  pacienteId.edad = req.body.edad;

  await pacienteId.save();
  console.log("actualizaaaaoooooooooooo"+pacienteId.toJSON());
  res.render("paciente/agregar", {});
}
)



  app.listen(3000, () => {
    console.log('Servidor Express en ejecución en el puerto 3000');
  });

  export default app;

