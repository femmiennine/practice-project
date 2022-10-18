const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
      //callback(null, file.fieldname);
      callback(null,Date.now() + "-" + file.originalname);
    }
  });
  
  exports.upload = multer({ storage: storage });