// external imports
const express = require("express");

// internal imports
const { getLogin, login } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler
} = require("../middlewares/login/loginValidators");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// process login

router.post("/", doLoginValidators, doLoginValidationHandler, login);

module.exports = router;
