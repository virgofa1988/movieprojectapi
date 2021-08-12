const multer = require("multer");

const uploadImageSingle = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      //Link to Folder Images/Movies
      callback(null, `./public/images/${folderName}`);
    },
    //name the file, combine random Date with originalname
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${file.originalname}`);
    },
  });

  const upload = multer({ storage });

  return upload.single("image");
};

module.exports = {
  uploadImageSingle,
};
