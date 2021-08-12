const { Movie, sequelize, Users } = require("../models");
const { Op } = require("sequelize");
var format = require("date-format");
//layDanhSachPhim
const layDanhSachPhim = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send(movieList);
  } catch (err) {
    res.status(500).send(err);
  }
};

//API layDanhSachPhimPhanTrang
const layDanhSachPhimPhanTrang = async (req, res) => {
  const { maNhom, tenPhim, soTrang, soPhanTuTrenTrang } = req.query;

  try {
    const { count, rows } = await Movie.findAndCountAll({
      where: {
        tenPhim: {
          [Op.like]: `%${tenPhim}%`,
        },
      },
      //Handle skip items per currentpage
      offset: (parseInt(soTrang) - 1) * parseInt(soPhanTuTrenTrang),
      limit: parseInt(soPhanTuTrenTrang),
    });
    const payload = {
      currentPage: parseInt(soTrang),
      count: parseInt(rows.length),
      totalPages:
        count % soPhanTuTrenTrang > 0
          ? Math.floor(count / soPhanTuTrenTrang) + 1
          : count / soPhanTuTrenTrang,
      totalCount: count,
      items: rows,
    };
    res.status(200).send(payload);
  } catch (err) {
    res.status(500).send(err);
  }
};

//API layDanhSachPhimTheoNgay
const layDanhSachPhimTheoNgay = async (req, res) => {
  const { tuNgay, denNgay, tenPhim } = req.query;
  const reverseTuNgay = tuNgay.split("-").reverse().join("-");
  const reverseDenNgay = denNgay.split("-").reverse().join("-");
  const startDate = new Date(`${reverseTuNgay} 07:01:00`);
  const endDate = new Date(`${reverseDenNgay} 23:59:00`);

  const movie = await Movie.findAll({
    where: {
      [Op.and]: [
        { ngayKhoiChieu: { [Op.gte]: startDate } },
        { ngayKhoiChieu: { [Op.lte]: endDate } },
      ],
    },
  });
  console.log(startDate, endDate);
  console.log(reverseTuNgay, reverseDenNgay);
  res.status(200).send(movie);
};
//Them Movie
const themPhim = async (req, res) => {
  const {
    maPhim,
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    moTa,
    maNhom,
    ngayKhoiChieu,
    danhGia,
  } = req.body;

  try {
    const newMovie = await Movie.create({
      maPhim,
      tenPhim,
      biDanh,
      trailer,
      hinhAnh,
      moTa,
      maNhom,
      ngayKhoiChieu,
      danhGia,
    });

    res.status(200).send(newMovie);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Xoa Phim
const xoaPhim = async (req, res) => {
  const { maPhim } = req.query;
  const movie = await Movie.findOne({ where: { maPhim } });
  if (movie) {
    try {
      await Movie.destroy({
        where: { maPhim },
      });
      // res.status(200).send(`Movie with maPhim : ${TaiKhoan} has been removed`);
      res.status(200).send(movie);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(404).send(`Movie with maPhim : ${maPhim} hasnot been found`);
  }
};

//CapNhatPHim
const capNhatPhim = async (req, res) => {
  const {
    maPhim,
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    moTa,
    maNhom,
    ngayKhoiChieu,
    danhGia,
  } = req.body;
  try {
    await Movie.update(
      {
        tenPhim,
        biDanh,
        trailer,
        hinhAnh,
        moTa,
        maNhom,
        ngayKhoiChieu,
        danhGia,
      },
      { where: { maPhim } }
    );
    const movie = await Movie.findOne({ where: { maPhim } });
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Upload Hinh Phim
const uploadHinhAnhPhim = async (req, res) => {
  //File from uploadimage middleware attached in
  //user from authenticateToken attached
  const { file, user } = req;
  const { maPhim } = req.body;
  const urlImage = "http://localhost:8080" + file.path;
  // res.status(200).send(req.body);
  try {
    await Movie.update(
      { hinhAnh: urlImage },
      {
        where: {
          maPhim,
        },
      }
    );
    const movie = await Movie.findOne({ where: { maPhim } });
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  layDanhSachPhim,
  layDanhSachPhimPhanTrang,
  layDanhSachPhimTheoNgay,
  themPhim,
  xoaPhim,
  capNhatPhim,
  uploadHinhAnhPhim,
};
