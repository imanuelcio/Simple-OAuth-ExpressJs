const { body } = require("express-validator");

const prisma = require("../../prisma/client");

const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .custom(async (value) => {
      if (!value) {
        throw new Error("Email is Required");
      }
      const user = await prisma.user.findUnique({
        where: { email: value },
      });

      if (user && user.id !== req.params.id) {
        throw new Error("Email already in use");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

module.exports = { validateUser };
