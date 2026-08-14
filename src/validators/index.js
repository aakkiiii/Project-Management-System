import { body } from "express-validator";
import { AvailableUserRole } from "../utils/constants.js";

//validations for all fields

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is Invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be in Lowercase")
      .isLength({ min: 3 })
      .withMessage("Username must be atleast 3 characters long"),
    body("password").trim().notEmpty().withMessage("Password is required"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is Required"),

    body("password").notEmpty().withMessage("Password is Required."),
  ];
};

const userChangecurrentPasswordValidator = () => {
  return [
    body("oldpassword").notEmpty().withMessage("Old Password is Required"),

    body("newpassword").notEmpty().withMessage("New Password is Required."),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email is Invalid."),
  ];
};

const userResetForgotPasswordValidator = () => {
  return [body("newPassword").notEmpty().withMessage("Password is Required")];
};

const createProjectValidator = () => {
  return [
    body("name").notEmpty().withMessage(),
    body("description").optional(),
  ];
};

const addMembersToProjectValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("role")
      .notEmpty()
      .withMessage("Role is required")
      .isIn(AvailableUserRole)
      .withMessage("role is invalid"),
  ];
};
export {
  userRegisterValidator,
  userLoginValidator,
  userResetForgotPasswordValidator,
  userForgotPasswordValidator,
  userChangecurrentPasswordValidator,
  createProjectValidator,
  addMembersToProjectValidator,
};
