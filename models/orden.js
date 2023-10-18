import { Model, DataTypes, Sequelize } from 'sequelize';


// Crear una instancia de Sequelize
export const sequelize = new Sequelize('proyectolab2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



export default class Paciente extends Model {
  static associate(models) {
    // define association here
  }
}
Paciente.init({
  id_Paciente:DataTypes.INTEGER,
  id_Administrativo:DataTypes.INTEGER,
  id_Examen:DataTypes.INTEGER,
  id_Bioquimico:DataTypes.INTEGER,
  id_Tecnico:DataTypes.INTEGER,
  diagnostico:DataTypes.STRING,
  estado:DataTypes.ENUM('esperando toma de muestra','Analitica','Para Validar','Informada')
}, {
  sequelize,
  modelName: 'Administrativo',
  tableName: 'administrativo',
  timestamps: false
});