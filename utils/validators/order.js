const { body } = require("express-validator");

const validateOrder = [
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email name is required")
    .isEmail()
    .withMessage("Email is invalid"),
  body("phone_number").notEmpty().withMessage("Phone number is required"),
  body("wedding_date")
    .notEmpty()
    .withMessage("Wedding date is required")
    .isDate()
    .withMessage("Date is invalid"),
];

module.exports = { validateOrder };
