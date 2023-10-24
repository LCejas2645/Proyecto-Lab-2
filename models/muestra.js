import { Model, DataTypes, Sequelize } from 'sequelize';


// Crear una instancia de Sequelize
export const sequelize = new Sequelize('proyectolab2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



export default class Muestra extends Model {
  static associate(models) {
    // define association here
  }
}
Muestra.init({
  descripcion:DataTypes.STRING,
  idExamen:DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'Muestra',
  tableName: 'muestra',
  timestamps: false
});