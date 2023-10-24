import { Model, DataTypes, Sequelize } from 'sequelize';


// Crear una instancia de Sequelize
export const sequelize = new Sequelize('proyectolab2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



export default class ValorReferencia extends Model {
  static associate(models) {
    // define association here
  }
}
ValorReferencia.init({
  determinacionId:DataTypes.INTEGER,
  categoria:DataTypes.STRING,
  valorMin:DataTypes.DOUBLE,
  valorMax:DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'ValoresReferencia',
  tableName: 'valoresReferencia',
  timestamps: false
});