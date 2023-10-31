'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => { class orden extends Model {
  static associate(models) {
    // define association here
  }
}
orden.init({
  id_Paciente:DataTypes.INTEGER,
  id_Administrativo:DataTypes.INTEGER,
  id_Examen:DataTypes.INTEGER,
  id_Bioquimico:DataTypes.INTEGER,
  id_Tecnico:DataTypes.INTEGER,
  diagnostico:DataTypes.STRING,
  estado:DataTypes.ENUM('esperando toma de muestra','Analitica','Para Validar','Informada')
}, {
  sequelize,
  modelName: 'orden',
  tableName: 'administrativo',
  timestamps: false
})
return orden
}