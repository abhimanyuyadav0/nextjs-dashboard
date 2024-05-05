import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import { NextFunction, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByIdV2,
  updateUser,
} from "../services/user.services";
import { generateToken } from "../auth/jwt.auth";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      phoneNumber = "",
      userName = "",
      password = "",
    } = req?.body;
    let existingUser;
    console.log(email, "email");
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required.", status: "success" });
    } else {
      existingUser = await getUserByEmail(email);
      console.log(existingUser, "existingUser");
    }
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = password
      ? await bcrypt.hash(password, saltRounds)
      : "";
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      userName: userName,
      password: hashedPassword,
    };
    const savedUser = await createUser(data);
    res.status(201).json({ msg: "User Created", savedUser });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { size, pageNumber, pagination } = req.query;
    const users = await getAllUsers(size, pageNumber, pagination);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: any = await getUserById(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.json({ ...users?._doc });
  } catch (error) {
    next(error);
  }
};

export const updateById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, phoneNumber, userName, password } =
      req?.body;

    const user = await getUserByIdV2(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const saltRounds = 10;
    let hashedPassword: string | null = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }
    const data = {
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName,
      email: email || user.email,
      phoneNumber: phoneNumber || user.phoneNumber,
      userName: userName || user.userName,
      password: hashedPassword || user.password,
    };
    const updatedUser: any = await updateUser(req.params.id, data);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await deleteUser(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.json({ message: "Users deleted" });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const inputPassword = req.body.password;
    let user;
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required.", status: "success" });
    } else {
      user = await getUserByEmail(email);
    }
    if (user) {
      const token = generateToken({ userId: user._id.toString() });
      const hashedPassword = user.password;
      const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
      if (isMatch) {
        const data={
          ...user,
          token:token
        }
        return res.status(200).json(data);
      } else {
        return res
          .status(400)
          .json({ message: "Invalid password.", status: "success" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "User does not exist.", status: "success" });
    }
  } catch (error) {
    next(error);
  }
};
