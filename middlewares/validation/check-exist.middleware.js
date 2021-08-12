const checkExistToDelete = (Model) => async (req, res, next) => {
  //Data from query
  const { TaiKhoan } = req.query;
  try {
    const user = await Model.findOne({ where: { taiKhoan: TaiKhoan } });
    if (user) {
      next();
    } else {
      res.status(404).send(`User with  ${TaiKhoan} is not existed`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkExistToAdd = (Model) => async (req, res, next) => {
  //Data from body
  const { taiKhoan } = req.body;

  try {
    const user = await Model.findOne({ where: { taiKhoan: taiKhoan } });
    if (user) {
      res.status(400).send(`User with  ${taiKhoan} is existed`);
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const checkMovieExistToUpdate = (Model) => async (req, res, next) => {
  //Data from body
  const { maPhim } = req.body;

  try {
    const phim = await Model.findOne({ where: { maPhim } });
    if (phim) {
      next();
    } else {
      res.status(400).send(`Movie with  ${maPhim} is not existed`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  checkExistToDelete,
  checkExistToAdd,
  checkMovieExistToUpdate,
};
