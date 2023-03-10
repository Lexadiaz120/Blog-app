import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { registerValidation } from "./validations/auth.js";
import UserModel from "./models/User.js";
import checkAuth from "./utils/checkAuth.js";
import User from "./models/User.js";
import { register } from "./controllers/UserController.js";
import { AuthMe } from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://alekseimotin:Motinmotin120@cluster0.dhsazm9.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post("/auth/login", AuthMe);

app.post("/auth/register", registerValidation, register);

app.get("/auth/me", checkAuth, AuthMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok");
});
