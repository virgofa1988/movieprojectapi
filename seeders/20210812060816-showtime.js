"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Showtimes",
      [
        {
          id: 1,
          maPhim: 1,
          ngayChieuGioChieu: "2021-07-27T12:08:21.657",
          maRap: 111,
          giaVe: 75000,
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 2,
          maPhim: 2,
          ngayChieuGioChieu: "2021-07-27T12:08:21.657",
          maRap: 112,
          giaVe: 75000,
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 3,
          maPhim: 1,
          ngayChieuGioChieu: "2021-07-27T12:08:21.657",
          maRap: 113,
          giaVe: 75000,
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
