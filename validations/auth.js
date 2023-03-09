import { body } from "express-validator";

export const registerValidation = [
  body("email", "Incorrect form of e-mail").isEmail(),
  body("password", "Password should contain minimum 5 symbols").isLength({
    min: 5,
  }),
  body("fullName", "Put your fullname").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect avatar url").optional().isURL(),
];
