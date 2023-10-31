'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class muestra extends Model {
    static associate(models) {
      muestra.belongsTo(models.examen,{
        
        foreignKey: 'idExamen',
        //target_Key: 'idExamen'
      })
    }
  }
  muestra.init({
    activo:DataTypes.BOOLEAN,
    descripcion:DataTypes.STRING,
    idExamen:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'muestra',
    tableName: 'muestra',
    timestamps: false
  });
  return muestra;
}

