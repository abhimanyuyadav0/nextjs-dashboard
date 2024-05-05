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
import authenticate from "../../middlewares/jwtAuth";
const router = Router();

// GET /Users/
router.get("/", authenticate, getAll);

// GET /Users/:id
router.get("/:id", authenticate, getById);

// POST / registerUsers
router.post(
  "/",
  authenticate,
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
router.patch("/:id", authenticate, updateById);

router.delete("/:id", authenticate, deleteById);

export { router as usersRoute };
