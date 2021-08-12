const express = require("express");
const {
  layThongTinHeThongRap,
  layThongTinCumRapTheoHeThong,
  layThongTinLichChieuHeThongRap,
} = require("../controllers/cinema.controller");
const cinemaRouter = express.Router();

//API get all Cineplex list
cinemaRouter.get("/laythongtinhethongrap", layThongTinHeThongRap);

//API get all cinema by Cineplex
cinemaRouter.get("/layThongTinCumRapTheoHeThong", layThongTinCumRapTheoHeThong);

//API get schedule by Cineplex
cinemaRouter.get(
  "/layThongTinLichChieuHeThongRap",
  layThongTinLichChieuHeThongRap
);

module.exports = {
  cinemaRouter,
};
