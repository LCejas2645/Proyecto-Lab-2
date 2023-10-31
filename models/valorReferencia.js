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
  determinacionId:DataTypes.INTEGER,
  categoria:DataTypes.STRING,
  valorMin:DataTypes.DOUBLE,
  valorMax:DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'valorReferencia',
  tableName: 'valoresReferencia',
  timestamps: false
});
return valorReferencia;
}