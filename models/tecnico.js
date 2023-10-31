'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {class tecnico extends Model {
  static associate(models) {
    // define association here
  }
}
tecnico.init({
  
  pass: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'tecnico',
  tableName: 'tecnico',
  timestamps: false
});
return tecnico
}