import express from 'express';
import { urlencoded } from 'express';
// import { join } from 'path';
// import indexRouter from './routes/index.js';
// import usersRouter from './routes/users.js';
import paciente, { sequelize } from './models/paciente.js';
import determinacion from './models/determinacion.js';
import examen from './models/examen.js';
import muestra from './models/muestra.js';
import { Op } from "sequelize";
import methodOverride from "method-override";



var app = express();


// view engine setup
app.set('view engine', 'pug');


// app.use(logger('dev'));
app.use(methodOverride("_method"));
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
  let error = true;
  const pacientes = await paciente.findAll();
  res.render('./paciente/paciente', { pacientes, error: error });
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
  res.render("paciente/agregar", {});
}
)

app.post("/agregar", async (req, res) => {
  let error = true;
  try {
    if (req.body.embarazo == undefined) {
      req.body.embarazo = false
    } else {
      req.body.embarazo = true
    }
    const pacienteN = {
      nombreCompleto: req.body.nombreCompleto,
      dni: req.body.dni,
      sexo: req.body.sexo,
      mail: req.body.mail,
      edad: req.body.edad,
      patologiaPre: req.body.patologiaPre,
      embarazo: req.body.embarazo
    };



    const pocientoOBJ = await paciente.create(pacienteN);
    console.log(pocientoOBJ.toJSON());
    error = false
    res.render("/", { error });
  } catch {
    error = true
    res.render("/", { error });
  }
}
)


app.get("/actualizar/:id", async (req, res) => {
  const pacienteId = await paciente.findByPk(req.params.id);
  console.log(req.params.id);
  console.log(pacienteId);
  res.render("paciente/actualizar", { pacienteId });
}
)

app.put("/actualizar", async (req, res) => {
  if (req.body.embarazo == undefined) {
    req.body.embarazo = false
  } else {
    req.body.embarazo = true
  }
  const result = await paciente.update(
    {
      nombreCompleto: req.body.nombreCompleto,
      dni: req.body.dni,
      edad: req.body.edad,
      sexo: req.body.sexo,
      embarazo: req.body.embarazo,
      patologiaPre: req.body.patologiaPre,
      mail: req.body.mail
    },
    { where: { id: req.body.id } })
  res.redirect("/");
  console.log("post = " + req.body.sexo)
}
)


app.get("/examen", async(req,res)=>{
  res.render("examen/examen",{});
})

app.get("/nuevoExamen", async(req,res)=>{
  res.render("examen/nuevoExamen",{});
})

app.post("/nuevoExamen", async(req,res)=>{
  const examenN = {
    descripcion: req.body.descripcion,
    tiempoPromedio: req.body.tiempoPromedio
  };
  const examenobj = await examen.create(examenN);
  res.render("examen/muestra",{examenobj});
})

app.post("/nuevaMuestra", async(req,res)=>{
  let idexam = req.body.idExamen;
  const muestraN = {
    descripcion: req.body.descripcion,
    idExamen: req.body.idExamen
  };
  const meustraobj = await muestra.create(muestraN);
  res.render("examen/determinacion",{idexam});
})

app.post("/nuevaDeterminacion", async(req,res)=>{
  let idexam = req.body.idExamen;
  const determN = {
    descripcion: req.body.descripcion,
    examenId: req.body.idExamen,
    unidadMedida:req.body.unidadMedida,
    valorMin:req.body.valorMin,
    valorMax:req.body.valorMax,
    valorReferencia:req.body.valorReferencia
  };
  const meustraobj = await determinacion.create(determN);
  res.render("examen/determinacion",{idexam});
})



app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000');
});

export default app;

