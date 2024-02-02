'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {class determinacionexamen extends Model {
  static associate(models) {
    // define association here
  }
}
determinacionexamen.init({
    idExamen:DataTypes.INTEGER,
    idDeterminacion:DataTypes.INTEGER,
    activo:DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'determinacionexamen',
  tableName: 'determinacionexamen',
  timestamps: false
});return determinacionexamen;
}