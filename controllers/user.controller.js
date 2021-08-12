//Import User
const { Users } = require("../models");
//Import bcryptjs to encrypt password
const bcryptjs = require("bcryptjs");
const { Op } = require("sequelize");

//Create Account
const dangKy = async (req, res) => {
  const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } =
    req.body;
  console.log(req.body);
  try {
    //Create random string with salt
    const salt = bcryptjs.genSaltSync(10);
    //Hash password
    const hashPassword = bcryptjs.hashSync(matKhau, salt);
    //Add User to DB
    const newUser = await Users.create({
      taiKhoan,
      matKhau: hashPassword,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Get UserList
const laydanhsachnguoidung = async (req, res) => {
  try {
    const userList = await Users.findAll();
    res.status(200).send(userList);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Get UserList per page
const layDanhSachNguoiDungPhanTrang = async (req, res) => {
  const { soTrang, soPhanTuTrenTrang, MaNhom } = req.query;
  try {
    const { count, rows } = await Users.findAndCountAll({
      where: {
        maNhom: MaNhom,
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

//Find User by keyword
const timKiemNguoiDung = async (req, res) => {
  const { MaNhom, tuKhoa } = req.query;
  try {
    const result = await Users.findAll({
      where: {
        maNhom: MaNhom,
        taiKhoan: {
          [Op.like]: `%${tuKhoa}%`,
        },
      },
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }

  res.status(200).send(req.query);
};

//Find User by keyword
const timKiemNguoiDungPhanTrang = async (req, res) => {
  const { MaNhom, tuKhoa, soTrang, soPhanTuTrenTrang } = req.query;

  try {
    const { count, rows } = await Users.findAndCountAll({
      //Search by keyword
      where: {
        maNhom: MaNhom,
        taiKhoan: {
          [Op.like]: `%${tuKhoa}%`,
        },
      },
      //pagination
      offset: (parseInt(soTrang) - 1) * parseInt(soPhanTuTrenTrang),
      limit: parseInt(soPhanTuTrenTrang),
    });

    const payload = {
      currentPage: parseInt(soTrang),
      count: parseInt(soPhanTuTrenTrang),
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

//Get User Detail with booking list
const thongTinTaiKhoan = async (req, res) => {
  res.status(200).send(req.body);
  // const payLoad = {
  //   taiKhoan: "",
  //   matKhau: "",
  //   hoTen: "",
  //   email: "",
  //   soDt: "",
  //   maNhom: "",
  //   maLoaiNguoiDung: "",
  //   thongTinDatVe: [],
  // };
  // res.status(200).send(payLoad);
};

//Delete User
const xoaNguoiDung = async (req, res) => {
  const { TaiKhoan } = req.query;

  try {
    await Users.destroy({
      where: { taiKhoan: TaiKhoan },
    });
    res.status(200).send(`User with Tai Khoan ${TaiKhoan} has been removed`);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Update User
const capNhatNguoiDung = async (req, res) => {
  const { taiKhoan, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = req.body;

  try {
    await Users.update(
      { taiKhoan, email, soDt, maNhom, maLoaiNguoiDung, hoTen },
      { where: { taiKhoan } }
    );
    const user = await Users.findOne({ where: { taiKhoan } });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  laydanhsachnguoidung,
  layDanhSachNguoiDungPhanTrang,
  timKiemNguoiDung,
  dangKy,
  xoaNguoiDung,
  capNhatNguoiDung,
  timKiemNguoiDungPhanTrang,
  thongTinTaiKhoan,
};
