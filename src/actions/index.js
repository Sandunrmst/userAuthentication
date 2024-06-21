"use server";

import connectToDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function registerUserAction(formData) {
  await connectToDB();
  try {
    const { userName, email, password } = formData;
    //check the user already register in db
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return {
        success: false,
        message: "User already exists! Please try with different email",
      };
    }

    //password encrypt
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create new user with encrypted password
    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    //save user
    const saveUser = await newlyCreatedUser.save();

    if (saveUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(saveUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something error occured",
    };
  }
}

export async function loginUserAction(loginFormData) {
  await connectToDB();
}
try {
  const { email, password } = loginFormData;

  //check user exits in DB
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return {
      success: false,
      message: "User does not exist! Please sign up",
    };
  }

  //check password is valid or not
  const checkPassword = await bcryptjs.compare(password, checkUser.password);

  if (!checkPassword) {
    return {
      success: false,
      message: "Password is incorrect please check",
    };
  }

  //create token for user
  const createTokenData = {
    id: checkUser._id,
    userName: checkUser.userName,
    email: checkUser.email,
  };

  const token = jwt.sign(createTokenData, "DEFAULT_KEY", { expiresIn: "1d" });

  //save browser local storage
  const getCookies = cookies();
  getCookies.set("token", token);

  return {
    success: true,
    message: "Login is sucessful!",
  };
} catch (error) {
  console.log(error);
  return {
    success: false,
    message: "Something wnet wrong! Please try again",
  };
}
