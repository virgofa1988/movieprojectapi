"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket, CinemaMovie }) {
      // define association here
      this.hasMany(Ticket, { foreignKey: "movieId" });
      this.hasMany(CinemaMovie, { foreignKey: "movieId" });
    }
  }
  Movie.init(
    {
      maPhim: DataTypes.INTEGER,
      tenPhim: DataTypes.STRING,
      biDanh: DataTypes.STRING,
      trailer: DataTypes.STRING,
      hinhAnh: DataTypes.STRING,
      moTa: DataTypes.STRING,
      maNhom: DataTypes.STRING,
      ngayKhoiChieu: DataTypes.STRING,
      danhGia: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
