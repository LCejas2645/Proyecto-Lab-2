'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bioquimico extends Model {
  static associate(models) {
    // define association here
  }
}
bioquimico.init({
  
  pass: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'bioquimico',
  tableName: 'administrativo',
  timestamps: false
});
return bioquimico;
}