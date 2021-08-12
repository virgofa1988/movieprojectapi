const express = require("express");
const { cinemaRouter } = require("./cinema.router");
const { movieRouter } = require("./movie.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();

//userRouter //Quan Ly Nguoi Dung
rootRouter.use("/quanlynguoidung", userRouter);

//Quan ly phim
rootRouter.use("/quanlyphim", movieRouter);

//Quan ly rap
rootRouter.use("/quanlyrap", cinemaRouter);

module.exports = {
  rootRouter,
};
