'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Administrativo extends Model {
  static associate(models) {
    // define association here
  }
}
Administrativo.init({
  
  pass: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Administrativo',
  tableName: 'administrativo',
  timestamps: false
});
return Administrativo;
}
