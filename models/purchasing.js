'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchasing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      this.hasMany(models.TransactionDetail, {
        foreignKey: 'purchasingId'
      })
    }
  }
  Purchasing.init({
    transaction_code: DataTypes.STRING,
    payment_status: DataTypes.ENUM('WAITING_PAYMENT', 'COMPLETED', 'CANCELLED'),
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Purchasing',
  });
  return Purchasing;
};