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
  try {
    const { email, password } = loginFormData;

    //check if user exists in DB
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        message: "User doesnot exist ! please sign up",
      };
    }

    //check password is valid or not
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return {
        message: "Password is incorrect please check",
        success: false,
      };
    }
    //create token for user
    const createdTokenData = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
      expiresIn: "1d",
    });
    //save token in user browser
    const getCookies = cookies();
    getCookies.set("token", token);

    return {
      success: true,
      message: "Login is successfull",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}

export async function fetchAuthUserAction() {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "Token is invalid",
      };
    }

    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });

    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Some error occurde! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}
