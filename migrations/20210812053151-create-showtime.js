"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Showtimes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maPhim: {
        type: Sequelize.INTEGER,
      },
      ngayChieuGioChieu: {
        type: Sequelize.STRING,
      },
      maRap: {
        type: Sequelize.INTEGER,
      },
      giaVe: {
        type: Sequelize.INTEGER,
      },
      cinemaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cinemas",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Showtimes");
  },
};
