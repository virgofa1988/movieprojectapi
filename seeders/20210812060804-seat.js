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
      "Seats",
      [
        {
          id: 1,
          name: "01",
          status: false,
          price: 75000,
          type: "Thuong",
          showtimeId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 2,
          name: "02",
          status: false,
          price: 75000,
          type: "VIP",
          showtimeId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 3,
          name: "03",
          status: false,
          price: 75000,
          type: "Thuong",
          showtimeId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 4,
          name: "04",
          status: false,
          price: 75000,
          type: "VIP",
          showtimeId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 5,
          name: "05",
          status: false,
          price: 75000,
          type: "Thuong",
          showtimeId: 3,
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
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
