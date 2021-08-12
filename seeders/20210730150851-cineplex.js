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
      "Cineplexes",
      [
        {
          id: 1,
          maHeThongRap: "BHDStar",
          tenHeThongRap: "BHD Star Cineplex",
          biDanh: "bhd-star-cineplex",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 2,
          maHeThongRap: "CGV",
          tenHeThongRap: "cgv",
          biDanh: "cgv",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 3,
          maHeThongRap: "CineStar",
          tenHeThongRap: "CineStar",
          biDanh: "cinestar",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 4,
          maHeThongRap: "Galaxy",
          tenHeThongRap: "Galaxy Cinema",
          biDanh: "galaxy-cinema",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 5,
          maHeThongRap: "LotteCinima",
          tenHeThongRap: "Lotte Cinema",
          biDanh: "lotte-cinema",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 6,
          maHeThongRap: "MegaGS",
          tenHeThongRap: "MegaGS",
          biDanh: "megags",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
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
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
