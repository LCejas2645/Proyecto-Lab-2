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
  descripcion:DataTypes.STRING,
  activo:DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'determinacion',
  tableName: 'determinacion',
  timestamps: false
});return determinacion;
}