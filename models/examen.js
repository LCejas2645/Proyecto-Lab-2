'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class examen extends Model {
    static associate(models) {
      examen.hasMany(models.muestra, {
        as:"Muestras",
        foreignKey: 'idExamen', // Nombre de la clave foránea en la tabla Muestra
      });
    }
  }
  
  examen.init({
    descripcion:DataTypes.STRING,
    tiempoPromedio:DataTypes.INTEGER,
    activo:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'examen',
    tableName: 'examen',
    timestamps: false
  });
  return examen;
}
