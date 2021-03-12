const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is a required field"),
  check("email").not().isEmail().withMessage("Must be a valid email address"),
  check("password")
    .not()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
