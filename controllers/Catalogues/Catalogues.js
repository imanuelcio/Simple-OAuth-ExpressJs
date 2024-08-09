const prisma = require("../../prisma/client");
const { validationResult } = require("express-validator");
const getCatalogues = async (req, res) => {
  try {
    const catalogues = await prisma.catalogues.findMany({
      select: {
        catalog_id: true,
        package_name: true,
        price: true,
        description: true,
      },
      orderBy: {
        catalog_id: "asc",
      },
    });
    res.status(200).send({
      success: true,
      message: "Get catalogues successfully",
      data: catalogues,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error on get catalogues",
    });
  }
};
const getCataloguesByID = async (req, res) => {
  const { id } = req.params;
  try {
    const catalogues = await prisma.catalogues.findFirst({
      where: {
        catalog_id: Number(id),
      },
      select: {
        catalog_id: true,
        package_name: true,
        price: true,
        description: true,
      },
    });
    res.status(200).send({
      success: true,
      message: "Get catalogues successfully",
      data: catalogues,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error on get catalogues",
    });
  }
};

const createCatalogues = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const catalogues = await prisma.catalogues.create({
      data: {
        image: req.body.image,
        package_name: req.body.package_name,
        description: req.body.description,
        price: req.body.price,
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
      message: "Internal server error on create catalogues",
    });
  }
};

const editCatalogues = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const catalogues = await prisma.catalogues.update({
      where: {
        catalog_id: Number(id),
      },
      data: {
        image: req.body.image,
        package_name: req.body.package_name,
        description: req.body.description,
        price: req.body.price,
      },
    });
    res.status(201).send({
      success: true,
      message: "Edit catalogues successfully",
      data: catalogues,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error on edit catalogues",
    });
    console.log(error);
  }
};

const deleteCatalogues = async (req, res) => {
  const { id } = req.params;
  try {
    const catalogues = await prisma.catalogues.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send({
      success: true,
      message: "Delete catalogues successfully",
      data: catalogues,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error on delete catalogues",
    });
  }
};

module.exports = {
  getCatalogues,
  createCatalogues,
  editCatalogues,
  deleteCatalogues,
  getCataloguesByID,
};
