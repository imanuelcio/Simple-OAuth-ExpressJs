const { body } = require("express-validator");

const validateCatalogues = [
  body("image").notEmpty().withMessage("Image is required"),
  body("package_name").notEmpty().withMessage("Package name is required"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .custom((value) => {
      if (value.length < 10) {
        throw new Error("Description must be at least 10 characters");
      }
      return true;
    }),
  body("price").notEmpty().withMessage("Price is required"),
];

module.exports = { validateCatalogues };
