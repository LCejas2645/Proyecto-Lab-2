import { Model, DataTypes, Sequelize } from 'sequelize';


// Crear una instancia de Sequelize
export const sequelize = new Sequelize('proyectolab2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



export default class Examen extends Model {
  static associate(models) {
    // define association here
  }
}
Examen.init({
  descripcion:DataTypes.STRING,
  tiempoPromedio:DataTypes.INTEGER,
  activo:DataTypes.BOOLEAN,
}, {
  sequelize,
  modelName: 'Examen',
  tableName: 'examen',
  timestamps: false
});