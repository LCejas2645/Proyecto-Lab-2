
// import express from 'express';
// import { urlencoded } from 'express';
// import paciente, { sequelize } from './models/paciente.js';
// import determinacion from './models/determinacion.js';
// import examen from './models/examen.js';
// import muestra from './models/muestra.js';
// import valoresReferencia from './models/valorReferencia.js';
// import { Op, json } from "sequelize";
// import methodOverride from "method-override";
// import { Sequelize } from 'sequelize';

const express = require('express');
const urlencoded = require('express').urlencoded;
const paciente = require('./models').paciente;
const sequelize = require('./models/paciente.js').sequelize;
const determinacion = require('./models').determinacion;
const examen = require('./models').examen;
const orden = require('./models').orden;
const muestra = require('./models').muestra;
const determinacionexamen = require('./models').determinacionexamen;
const valoresReferencia = require('./models').valorReferencia;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const json = require('sequelize').json;
const methodOverride = require('method-override');



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

app.get("/",(req,res)=>{
  res.render("home")
})

app.get('/paciente', async (req, res) => {
  let error = true;
  const pacientes = await paciente.findAll();
  res.render('paciente/paciente', { pacientes, error: error });
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
    res.render("paciente/paciente", { error });
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


app.get("/examen", async (req, res) => {
  const examenes = await examen.findAll();
  res.render("examen/examen", { examenes });
})  

app.get("/editar/:id",async(req,res)=>{
  const examenes = await examen.findAll();
  const examenEdit = await examen.findByPk(req.params.id);

  res.render("examen/editarExamen", {examenEdit,examenes});
})

app.put("/editarExamen", async(req,res)=>{
 
  const result = await examen.update(
    {
      descripcion : req.body.descripcion,
      activo : req.body.activo,
      tiempoPromedio: req.body.tiempoPromedio
    },
    { where: { id: req.body.id } })
  //res.json(req.body.activo)
  res.redirect("/examen")
})

//buscar todas las muestras de un examen
app.get("/editarMuestras/:id", async (req, res) => {
  try {
    const examenes = await examen.findAll()
    const examenEdit = await examen.findByPk(req.params.id);
    const muestraE = await muestra.findByPk(examenEdit.idMuestra)
    // if (!examenEdit) {
    //   return res.status(404).json({ message: "Examen no encontrado" });
    // }

    //res.json(muestraE)
     res.render("examen/editarMuestra",{
      examenEdit,
      examenes,
      muestraE
    });
  } catch (error) {
    console.error("Error al obtener las muestras:", error);
    res.status(500).json({ message: "Error al obtener las muestras" });
  }
});

//editar muestras de un examen
app.put("/muestraNueva", async(req,res)=>{
  console.log("posteado")
  let idExamen = req.body.idExamen;
  let muestraN  = {
    idMuestra : req.body.idMuestra,
    descripcionMuestra: req.body.descripcionMuestra
  } 

 let muestraNueva = await muestra.update(
  {
    descripcion:req.body.descripcionMuestra,
    activo : req.body.activo
  },
  {
    where:{id:req.body.idMuestra}
  }
 )

  res.json(muestraNueva)
})
//crear neuvo examen
app.get("/nuevoExamen", (req, res) => {
  res.render("examen/nuevoExamen", {});
})
//vista para nuevo examen
app.post("/nuevoExamen", async (req, res) => {
  const examenN = {
    descripcion: req.body.descripcion,
    tiempoPromedio: req.body.tiempoPromedio
  };
  const examenobj = await examen.create(examenN);
  const muestras = await muestra.findAll();
  
  res.render("examen/muestra", { examenobj,muestras});
  //res.json(examenobj)
})
//agregar muestra a examen y lo crea si no lo hay
app.post("/muestra", async (req, res) => {
  let descripcion = req.body.descripcion;
  let idExamen = req.body.idExamen;

  let muestran = await muestra.findOne({
    where: {descripcion:descripcion}
  })

  let examenn = await examen.update(
    {idMuestra:muestran.id},
    {where:{id:idExamen}}
  )

  //await muestra.create({ descripcion: descripcion, idExamen: idExamen });
  
  //const meustraobj = await muestra.create(muestraN);
   res.render("examen/determinacion", { idExamen });
  
   //res.json(muestran)
})

app.post("/nuevaDeterminacion", async (req, res) => {
  let idExamen = req.body.idExamen;

  let determinacionN = await determinacion.create({
    descripcion: req.body.descripcion,
  })
  let determinacionExamen = await determinacionexamen.create({
    idExamen: idExamen,
    idDeterminacion: determinacionN.id
  })


  let determinacionId = determinacionN.id;
  let categoria = req.body.categoria;
  let valorMin = req.body.valorMin;
  let valorMax = req.body.valorMax;
  let min = req.body.min;
  let max = req.body.max;
  let edadMin = req.body.edadMin;
  let edadMax = req.body.edadMax;
  let unidadMedida = req.body.unidadMedida;

  for (let i = 0; i < categoria.length; i++) {
    await valoresReferencia.create({
      min : min[i],
      max : max[i],
      edadMin: edadMin[i],
      edadMax: edadMax[i],
      unidadMedida: unidadMedida[i],
      categoria: categoria[i],
      valorMin: valorMin[i],
      valorMax: valorMax[i],
      idDeterminacion: determinacionId,
    });
  }


  res.render("examen/examen", { idExamen })
})

app.get("/determinaciones",async(req,res)=>{
  let determinaciones = await determinacion.findAll()
  res.render("examen/determinaciones",{determinaciones})
})

app.get("/editarDeterminacion/:id",async(req,res)=>{
    let determinacionEdit = await determinacion.findByPk(req.params.id);
    let determinaciones = await determinacion.findAll();

    res.render("examen/editarDeterminacion",{determinacionEdit,determinaciones})
})

app.put("/editarDeterminacion",async(req,res)=>{
  let determinacionN = await determinacion.update(
    {
      descripcion:req.body.descripcion,
      activo : req.body.activo
    },
    {
      where:{id:req.body.id}
    }
   )
   res.redirect("/determinaciones")
})

app.get("/editarDeterminacionV/:id",async(req,res)=>{
    let determinaciones = await determinacion.findAll();
    let determinacionN = await determinacion.findByPk(req.params.id);
    let valoresReferenciaD = await valoresReferencia.findAll({
      where:{idDeterminacion:determinacionN.id}
    })
    res.render("examen/editarDeterminacionV",{determinacionN,determinaciones,valoresReferenciaD})
})

app.get("/ordenes",async(req,res)=>{
  let ordenes = await orden.findAll();
  //let paciente = await ordeneN.getPaciente();
  //res.send(JSON.stringify(ordeneN));
  res.render("orden/ordenes",{ordenes})
})

app.get("/crearOrden/:id",async(req,res)=>{
  let pacienteN = await paciente.findByPk(req.params.id);
  let examenes = await examen.findAll();
  //res.json(pacienteN)
  res.render("orden/crearOrden",{pacienteN,examenes})
})





app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000');
});

module.exports = app;

