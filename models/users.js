"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket, { foreignKey: "userId" });
    }
  }
  Users.init(
    {
      taiKhoan: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      email: DataTypes.STRING,
      soDt: DataTypes.STRING,
      maNhom: DataTypes.STRING,
      maLoaiNguoiDung: DataTypes.STRING,
      hoTen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
