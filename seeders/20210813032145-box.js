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
      "Boxes",
      [
        {
          id: 1,
          maRap: 411,
          tenRap: "Rap 1",
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 2,
          maRap: 412,
          tenRap: "Rap 2",
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 3,
          maRap: 413,
          tenRap: "Rap 3",
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 4,
          maRap: 414,
          tenRap: "Rap 4",
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 5,
          maRap: 415,
          tenRap: "Rap 5",
          cinemaId: 1,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 6,
          maRap: 421,
          tenRap: "Rap 1",
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 7,
          maRap: 422,
          tenRap: "Rap 2",
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 8,
          maRap: 423,
          tenRap: "Rap 3",
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 9,
          maRap: 424,
          tenRap: "Rap 4",
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 10,
          maRap: 425,
          tenRap: "Rap 5",
          cinemaId: 2,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 11,
          maRap: 511,
          tenRap: "Rap 1",
          cinemaId: 7,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 12,
          maRap: 512,
          tenRap: "Rap 2",
          cinemaId: 7,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 13,
          maRap: 513,
          tenRap: "Rap 3",
          cinemaId: 7,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 14,
          maRap: 514,
          tenRap: "Rap 4",
          cinemaId: 7,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 15,
          maRap: 515,
          tenRap: "Rap 5",
          cinemaId: 7,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 16,
          maRap: 521,
          tenRap: "Rap 1",
          cinemaId: 8,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 17,
          maRap: 522,
          tenRap: "Rap 2",
          cinemaId: 8,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 18,
          maRap: 523,
          tenRap: "Rap 3",
          cinemaId: 8,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 19,
          maRap: 524,
          tenRap: "Rap 4",
          cinemaId: 8,
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 20,
          maRap: 525,
          tenRap: "Rap 5",
          cinemaId: 8,
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
    await queryInterface.bulkDelete("Boxes", null, {});
  },
};
