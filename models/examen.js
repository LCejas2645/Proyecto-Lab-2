'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class examen extends Model {
    static associate(models) {
      examen.belongsTo(models.muestra, {
        // as:"Muestras"
          //  targetKey:'id' ,
           foreignKey: 'idMuestra', // Nombre de la clave foránea en la tabla Muestra
      });
    }
  }
  
  examen.init({
    descripcion:DataTypes.STRING,
    tiempoPromedio:DataTypes.INTEGER,
    activo:DataTypes.BOOLEAN,
    idMuestra:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'examen',
    tableName: 'examen',
    timestamps: false
  });
  return examen;
}
