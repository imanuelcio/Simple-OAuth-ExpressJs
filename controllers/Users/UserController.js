const express = require("express");

const prisma = require("../../prisma/client");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const findUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).send({
      success: true,
      message: "Get All users successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(422).send({
        success: false,
        message: "Validation error",
        errors: error.array(),
      });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      },
    });
    res.status(201).send({
      success: true,
      message: "Create user successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    res.status(201).send({
      success: true,
      message: "Get user successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.status(422).json({
      success: false,
      message: "Validation error",
      errors: error.array(),
    });
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      },
    });
    res.status(200).send({
      success: true,
      message: `Update user ${id} is successfully`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send({
      success: true,
      message: `Delete user ${id} is successfully`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  findUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
};
