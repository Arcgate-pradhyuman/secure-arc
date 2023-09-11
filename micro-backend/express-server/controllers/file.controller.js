const multer = require('multer');
const upload = multer();

const fileUpload = async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      upload.single('file')(req, res, (err) => {
        if (err) {
          reject(err);
        } else {
          if (!req.file) {
            reject(new Error('No file uploaded'));
          } else {
            //path = `http://localhost:3000/${req.file.path}`;
            resolve();
          }
        }
      });
    });
    return res.status(200).send({ message: 'File uploaded successfully' });
  } catch (error) {
    console.log(`error generate while uploading the file ${error.message}`);
    next(error);
  }
};

module.exports = { fileUpload };
