'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class muestra extends Model {
    static associate(models) {
      muestra.hasMany(models.examen,{
        
        // // foreignKey: 'idExamen',
        foreignKey: 'idMuestra'
      })
    }
  }
  muestra.init({
    activo:DataTypes.BOOLEAN,
    descripcion:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'muestra',
    tableName: 'muestra',
    timestamps: false
  });
  return muestra;
}

