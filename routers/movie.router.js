const express = require("express");
const { Movie } = require("../models");
const {
  themPhim,
  layDanhSachPhim,
  layDanhSachPhimPhanTrang,
  layDanhSachPhimTheoNgay,
  xoaPhim,
  uploadHinhAnhPhim,
  capNhatPhim,
} = require("../controllers/movie.controller");
const {
  authenticateToken,
  authorizeUserRole,
} = require("../middlewares/auth/verify-token.middleware");
const {
  uploadImageSingle,
} = require("../middlewares/uploads/uploadimage.middleware");
const {
  checkMovieExistToUpdate,
  checkExistToDelete,
} = require("../middlewares/validation/check-exist.middleware");
const movieRouter = express.Router();

//API lay danh sach phim
movieRouter.get("/laydanhsachphim", layDanhSachPhim);

//API lay danh sach phim phan trang
movieRouter.get("/laydanhsachphimphantrang", layDanhSachPhimPhanTrang);

//API lay danh sach phim theo ngay
movieRouter.get("/laydanhsachphimtheongay", layDanhSachPhimTheoNgay);

//API Them Phim By Admin
movieRouter.post(
  "/themphim",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  uploadImageSingle("movies"),
  themPhim
);

//API Xoa Phim
movieRouter.delete(
  "/xoaphim",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  checkMovieExistToUpdate(Movie),
  xoaPhim
);

//API cap Nhat Phim
movieRouter.post(
  "/capnhatphim",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  checkMovieExistToUpdate(Movie),
  capNhatPhim
);

//API Upload Movie Images
movieRouter.post(
  "/uploadhinhanhphim",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  uploadImageSingle("movies"),
  uploadHinhAnhPhim
);

module.exports = {
  movieRouter,
};
