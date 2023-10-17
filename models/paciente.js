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
  
  nombreCompleto: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  mail: DataTypes.STRING,
  sexo: DataTypes.ENUM('Masculino', 'Femenino','Otro'),
  embarazo: DataTypes.BOOLEAN,
  patologiaPre: DataTypes.STRING,
  dni: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Paciente',
  tableName: 'paciente',
  timestamps: false
});

