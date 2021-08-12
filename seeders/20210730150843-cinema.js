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
      "Cinemas",
      [
        {
          id: 1,
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 2,
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 3,
          maCumRap: "bhd-star-cineplex-pham-hung",
          tenCumRap: "BHD Star Cineplex - Phạm Hùng",
          diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 4,
          maCumRap: "bhd-star-cineplex-vincom-le-van-viet",
          tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
          diaChi: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 5,
          maCumRap: "bhd-star-cineplex-vincom-quang-trung",
          tenCumRap: "BHD Star Cineplex - Vincom Quang Trung",
          diaChi: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 6,
          maCumRap: "bhd-star-cineplex-vincom-thao-dien",
          tenCumRap: "BHD Star Cineplex - Vincom Thảo Điền",
          diaChi: "L5-Megamall, 159 XL Hà Nội, Q.2",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 1,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 7,
          maCumRap: "cgv-aeon-binh-tan",
          tenCumRap: "CGV - Aeon Bình Tân",
          diaChi:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 8,
          maCumRap: "cgv-aeon-tan-phu",
          tenCumRap: "CGV - Aeon Tân Phú",
          diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 9,
          maCumRap: "cgv-cgv-saigonres-nguyen-xi",
          tenCumRap: "CGV - CGV Saigonres Nguyễn Xí",
          diaChi:
            "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 10,
          maCumRap: "cgv-crescent-mall",
          tenCumRap: "CGV - Crescent Mall",
          diaChi:
            "Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 11,
          maCumRap: "cgv-ct-plaza",
          tenCumRap: "CGV - CT Plaza",
          diaChi: "60A Trường Sơn,P. 2, Tân Bình",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 12,
          maCumRap: "cgv-golden-plaza",
          tenCumRap: "CGV - Golden Plaza",
          diaChi:
            "Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 13,
          maCumRap: "cgv-hoang-van-thu",
          tenCumRap: "CGV - Hoàng Văn Thụ",
          diaChi: "Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân Bình",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 14,
          maCumRap: "cgv-hung-vuong-plaza",
          tenCumRap: "CGV - Hùng Vương Plaza",
          diaChi: "Lầu 7, 126 Hùng Vương, Q. 5",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 15,
          maCumRap: "cgv-imc-tran-quang-khai",
          tenCumRap: "CGV - IMC Trần Quang Khải",
          diaChi: "T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 16,
          maCumRap: "cgv-liberty-citypoint",
          tenCumRap: "CGV - Liberty Citypoint",
          diaChi:
            "Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pateur, Q. 1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 17,
          maCumRap: "cgv-pandora-city",
          tenCumRap: "CGV - Pandora City",
          diaChi: "Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 18,
          maCumRap: "cgv-paragon",
          tenCumRap: "CGV - Paragon",
          diaChi: "Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 19,
          maCumRap: "cgv-parkson-dong-khoi",
          tenCumRap: "CGV - Parkson Đồng Khởi",
          diaChi:
            "Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến Nghé, Q.1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 20,
          maCumRap: "cgv-pearl-plaza",
          tenCumRap: "CGV - Pearl Plaza",
          diaChi: "Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 21,
          maCumRap: "cgv-satra-cu-chi",
          tenCumRap: "CGV - Satra Củ Chi",
          diaChi:
            "T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 22,
          maCumRap: "cgv-su-van-hanh",
          tenCumRap: "CGV - Sư Vạn Hạnh",
          diaChi: "T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 23,
          maCumRap: "cgv-vincom-dong-khoi",
          tenCumRap: "CGV - Vincom Đồng Khởi",
          diaChi:
            "Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 24,
          maCumRap: "cgv-vincom-go-vap",
          tenCumRap: "CGV - Vincom Gò Vấp",
          diaChi:
            "Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 25,
          maCumRap: "cgv-vincom-landmark-81",
          tenCumRap: "CGV - Vincom Landmark 81",
          diaChi:
            "T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 26,
          maCumRap: "cgv-vincom-thu-duc",
          tenCumRap: "CGV - Vincom Thủ Đức",
          diaChi: "Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 27,
          maCumRap: "cgv-vivocity",
          tenCumRap: "CGV - VivoCity",
          diaChi:
            "Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. 7",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 2,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 28,
          maCumRap: "cns-hai-ba-trung",
          tenCumRap: "CNS - Hai Bà Trưng",
          diaChi: "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 3,
          updatedAt: "2021-07-06 21:08:50",
        },
        {
          id: 29,
          maCumRap: "cns-quoc-thanh",
          tenCumRap: "CNS - Quốc Thanh",
          diaChi: "271 Nguyễn Trãi, Q.1",
          createdAt: "2021-07-06 21:08:50",
          cineplexId: 3,
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
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
