import { Model, DataTypes, Sequelize } from 'sequelize';


// Crear una instancia de Sequelize
export const sequelize = new Sequelize('proyectolab2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



export default class Determinacion extends Model {
  static associate(models) {
    // define association here
  }
}
Determinacion.init({
  examenId:DataTypes.INTEGER,
  descripcion:DataTypes.STRING,
  unidadMedida:DataTypes.STRING,
  valorMin:DataTypes.DOUBLE,
  valorMax:DataTypes.DOUBLE,
  valorReferencia:DataTypes.DOUBLE
}, {
  sequelize,
  modelName: 'Determinacion',
  tableName: 'determinacion',
  timestamps: false
});