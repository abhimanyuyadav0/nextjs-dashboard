import { Router } from "express";
import {
  deleteById,
  getAll,
  getById,
  loginUser,
  registerUser,
  updateById,
} from "../../controllers/users.controller";
import requireFieldsMiddleware from "../../middlewares/requireFieldsMiddleware";
import { verifyToken } from "../../auth/jwt.auth";
const router = Router();

// GET /Users/
router.get("/", verifyToken, getAll);

// GET /Users/:id
router.get("/:id", verifyToken, getById);

// POST / registerUsers
router.post(
  "/",
  verifyToken,
  requireFieldsMiddleware(["email", "password"]),
  registerUser
);

// POST /loginUsers
router.post(
  "/login",
  requireFieldsMiddleware(["email", "password"]),
  loginUser
);

// PATCH /Users/:id
router.patch("/:id", verifyToken, updateById);

router.delete("/:id", verifyToken, deleteById);

export { router as usersRoute };
