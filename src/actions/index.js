"use server";

import connectToDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";

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
    const salt = bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
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
