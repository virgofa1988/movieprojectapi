const express = require("express");
const { Users } = require("../models");
const {
  laydanhsachnguoidung,
  xoaNguoiDung,
  capNhatNguoiDung,
  layDanhSachNguoiDungPhanTrang,
  timKiemNguoiDung,
  timKiemNguoiDungPhanTrang,
  thongTinTaiKhoan,
  dangKy,
} = require("../controllers/user.controller");
const {
  checkExistToDelete,
  checkExistToAdd,
} = require("../middlewares/validation/check-exist.middleware");
const { authRouter } = require("./auth.router");
const {
  authenticateToken,
  authorizeUserRole,
} = require("../middlewares/auth/verify-token.middleware");
const userRouter = express.Router();

//API laydanhsachnguoidung
userRouter.get("/laydanhsachnguoidung", laydanhsachnguoidung);

//API laydanhsachnguoidungphantrang
userRouter.get("/laydanhsachnguoidungphantrang", layDanhSachNguoiDungPhanTrang);

//API Search User
userRouter.get("/timkiemnguoidung", timKiemNguoiDung);

//API Search  User / currentPage and pageSize
userRouter.get("/timkiemnguoidungphantrang", timKiemNguoiDungPhanTrang);

//API Get User Detail
userRouter.post("/thongtintaikhoan", authenticateToken, thongTinTaiKhoan);

//API Add Your
userRouter.post(
  "/themnguoidung",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  checkExistToAdd(Users),
  dangKy
);

//API dang ki
userRouter.post("/dangki", dangKy);

//API dang nhap
userRouter.use("/dangnhap", authRouter);

//API delete user
userRouter.delete(
  "/xoanguoidung",
  authenticateToken,
  authorizeUserRole(["Admin", "SuperAdmin"]),
  checkExistToDelete(Users),
  xoaNguoiDung
);

//API update user
userRouter.put(
  "/capnhatthongtinnguoidung",
  authenticateToken,
  capNhatNguoiDung
);

module.exports = {
  userRouter,
};
