'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {class determinacion extends Model {
  static associate(models) {
    // define association here
  }
}
determinacion.init({
  examenId:DataTypes.INTEGER,
  descripcion:DataTypes.STRING,
  unidadMedida:DataTypes.STRING,
  valorMin:DataTypes.DOUBLE,
  valorMax:DataTypes.DOUBLE,
  valorReferencia:DataTypes.DOUBLE
}, {
  sequelize,
  modelName: 'determinacion',
  tableName: 'determinacion',
  timestamps: false
});return determinacion;
}