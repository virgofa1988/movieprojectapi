"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema }) {
      // define association here
      this.belongsTo(Cinema, { foreignKey: "cinemaId" });
    }
  }
  Box.init(
    {
      maRap: DataTypes.INTEGER,
      tenRap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Box",
    }
  );
  return Box;
};
