const { Cinema, Cineplex, Showtime, Seat, Box } = require("../models");
const { Op } = require("sequelize");

const layThongTinHeThongRap = async (req, res) => {
  const { maHeThongRap } = req.query;
  try {
    if (maHeThongRap === "") {
      const CineplexList = await Cineplex.findAll({
        include: [
          {
            model: Cinema,
          },
        ],
      });
      res.status(200).send(CineplexList);
    } else if (maHeThongRap) {
      const CineplexList = await Cineplex.findAll({ where: { maHeThongRap } });
      res.status(200).send(CineplexList);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const layThongTinCumRapTheoHeThong = async (req, res) => {
  const { maHeThongRap } = req.query;

  try {
    const cineplexCheckExist = await Cineplex.findOne({
      where: {
        maHeThongRap,
      },
    });
    if (cineplexCheckExist) {
      const CinemaListByCineplex = await Cinema.findAll({
        //Liên kết với model Cineplex thông qua foreign key
        include: [
          {
            model: Cineplex,
            where: {
              maHeThongRap,
            },
          },
          { model: Showtime, include: [{ model: Seat }] },
          { model: Box },
        ],
      });
      res.status(200).send(CinemaListByCineplex);
    } else {
      res.status(404).send("Mã Hệ Thống Rạp Không Tồn Tại");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const layThongTinLichChieuHeThongRap = async (req, res) => {
  const { maHeThongRap, maNhom } = req.query;
  res.send(req.query);
};
module.exports = {
  layThongTinHeThongRap,
  layThongTinCumRapTheoHeThong,
  layThongTinLichChieuHeThongRap,
};
