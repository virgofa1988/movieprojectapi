'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taiKhoan: {
        type: Sequelize.STRING
      },
      matKhau: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      soDt: {
        type: Sequelize.STRING
      },
      maNhom: {
        type: Sequelize.STRING
      },
      maLoaiNguoiDung: {
        type: Sequelize.STRING
      },
      hoTen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};