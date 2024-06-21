"use server";

import connectToDB from "@/database";

export async function registerUserAction() {
  await connectToDB();

  try {
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something error occured",
    };
  }
}
