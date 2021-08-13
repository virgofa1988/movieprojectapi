"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cineplex, CinemaMovie, Showtime, Box }) {
      // define association here
      this.belongsTo(Cineplex, { foreignKey: "cineplexId" });
      this.hasMany(CinemaMovie, { foreignKey: "cinemaId" });
      this.hasMany(Showtime, { foreignKey: "cinemaId" });
      this.hasMany(Box, { foreignKey: "cinemaId" });
    }
  }
  Cinema.init(
    {
      maCumRap: DataTypes.STRING,
      tenCumRap: DataTypes.STRING,
      diaChi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
