'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchasingDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Purchasing, {
        foreignKey: 'purchasingId'
      }),
      this.belongsTo(models.Item, {
        foreignKey: 'itemId'
      })
    }
  }
  PurchasingDetail.init({
    purchasingId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PurchasingDetail',
  });
  return PurchasingDetail;
};