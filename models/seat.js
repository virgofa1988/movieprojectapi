"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Showtime }) {
      // define association here
      this.belongsTo(Showtime, { foreignKey: "showtimeId" });
    }
  }
  Seat.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
