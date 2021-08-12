"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Movie }) {
      // define association here
      this.belongsTo(Users, { foreignKey: "userId" });
      this.belongsTo(Movie, { foreignKey: "movieId" });
    }
  }
  Ticket.init(
    {
      maGhe: DataTypes.INTEGER,
      giaVe: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
