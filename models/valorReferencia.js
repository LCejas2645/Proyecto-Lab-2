'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {class valorReferencia extends Model {
  static associate(models) {
    // define association here
  }
}
valorReferencia.init({
  idDeterminacion:DataTypes.INTEGER,
  unidadMedida:DataTypes.ENUM('mg/dL', 'g/dL', 'µg/dL', 'mmHg', '%'),
  categoria:DataTypes.STRING,
  valorMin:DataTypes.DOUBLE,
  valorMax:DataTypes.DOUBLE,
  activo:DataTypes.BOOLEAN,
  edadMax: DataTypes.INTEGER,
  edadMin: DataTypes.INTEGER,
  min: DataTypes.DOUBLE,
  max: DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'valorReferencia',
  tableName: 'valoresReferencia',
  timestamps: false
});
return valorReferencia;
}