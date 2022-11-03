const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"], // allowed file formats
    1000000, // file size in mb
    "Only .jpg, jpeg or .png format allowed!" // error message if file isn't accepted
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message
          }
        }
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
