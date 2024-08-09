const prisma = require("../../prisma/client");
const { validationResult } = require("express-validator");
const createOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const catalogues = await prisma.order.create({
      data: {
        catalog_id: req.body.catalog_id,
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        status_order: req.body.status_order,
        weddings_date: req.body.weddings_date,
        user_id: req.body.user_id,
      },
    });
    res.status(201).send({
      success: true,
      message: "Create catalogues successfully",
      data: catalogues,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error on create order",
    });
  }
};

module.exports = { createOrder };
