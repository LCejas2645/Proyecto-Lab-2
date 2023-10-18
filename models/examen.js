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
  recibida:DataTypes.BOOLEAN,
  estado:DataTypes.STRING,
  id_Determinacion:DataTypes.INTEGER,
  
}, {
  sequelize,
  modelName: 'Administrativo',
  tableName: 'administrativo',
  timestamps: false
});