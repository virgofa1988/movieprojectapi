"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Seat, Cinema }) {
      // define association here
      this.hasMany(Seat, { foreignKey: "showtimeId" });
      this.belongsTo(Cinema, { foreignKey: "cinemaId" });
    }
  }
  Showtime.init(
    {
      maPhim: DataTypes.INTEGER,
      ngayChieuGioChieu: DataTypes.STRING,
      maRap: DataTypes.INTEGER,
      giaVe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
