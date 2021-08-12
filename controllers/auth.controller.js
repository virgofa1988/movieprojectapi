//Import Model
const { Users } = require("../models");
//Import bcryptjs to decode password
const bcrypt = require("bcryptjs");
//Import jwt to create Token when user login successfully
const jwt = require("jsonwebtoken");

const dangNhap = async (req, res) => {
  //user login with taiKhoan,matKhau
  const { matKhau, taiKhoan } = req.body;
  try {
    //find user if exist in db by taiKhoan
    const userLogin = await Users.findOne({ where: { taiKhoan } });
    // res.status(200).send(userLogin);
    if (userLogin) {
      //If exist compare password
      const isAuth = bcrypt.compareSync(matKhau, userLogin.matKhau);

      if (isAuth) {
        //Create Payload to response clientsite
        const payload = {
          taiKhoan: userLogin.taiKhoan,
          hoTen: userLogin.hoTen,
          email: userLogin.email,
          soDt: userLogin.soDt,
          maNhom: userLogin.maNhom,
          maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
        };
        //Create Secretkey
        const secretKey = "jay";
        //Create token
        const token = jwt.sign(payload, secretKey, {
          expiresIn: 60 * 60 * 24 * 12,
        });

        res.status(200).send({ ...payload, accessToken: token });
      } else {
        res.status(400).send("Wrong Password");
      }
    }
    res.status(404).send("NOT FOUND");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { dangNhap };
