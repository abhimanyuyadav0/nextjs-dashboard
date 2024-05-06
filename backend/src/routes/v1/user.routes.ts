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
import authenticate from "../../middlewares/jwtAuth";
const router = Router();

// GET /Users/
router.get("/", getAll);

// GET /Users/:id
router.get("/:id", getById);

// POST / registerUsers
router.post("/", requireFieldsMiddleware(["email", "password"]), registerUser);

// POST /loginUsers
router.post(
  "/login",
  requireFieldsMiddleware(["email", "password"]),
  loginUser
);

// PATCH /Users/:id
router.patch("/:id", updateById);

router.delete("/:id", deleteById);

export { router as usersRoute };
