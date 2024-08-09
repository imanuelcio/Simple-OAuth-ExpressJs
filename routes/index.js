const express = require("express");
const router = express.Router();

const { register } = require("../controllers/Users/RegisterController");
const { login } = require("../controllers/Users/LoginController");
const { validateRegister, validateLogin } = require("../utils/validators/auth");
const { validateUser } = require("../utils/validators/user");
const {
  createUser,
  findUserById,
  findUsers,
  updateUser,
  deleteUser,
} = require("../controllers/Users/UserController");

const { validateCatalogues } = require("../utils/validators/catalogues");
const {
  createCatalogues,
  getCatalogues,
  getCataloguesByID,
  editCatalogues,
  deleteCatalogues,
} = require("../controllers/Catalogues/Catalogues");

const { verifyToken } = require("../middleware/auth");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/admin/users", verifyToken, findUsers);
router.get("/admin/users/:id", verifyToken, findUserById);
router.post("/admin/user", verifyToken, validateUser, createUser);
router.put("/admin/user/:id", verifyToken, validateUser, updateUser);
router.delete("/admin/user/:id", verifyToken, deleteUser);

router.get("/admin/catalogues", verifyToken, getCatalogues);
router.get("/admin/catalogues/:id", verifyToken, getCataloguesByID);
router.post(
  "/admin/catalogues",
  verifyToken,
  validateCatalogues,
  createCatalogues
);
router.put(
  "/admin/catalogues/:id",
  verifyToken,
  validateCatalogues,
  editCatalogues
);
router.delete("/admin/catalogues/:id", verifyToken, deleteCatalogues);
module.exports = router;
