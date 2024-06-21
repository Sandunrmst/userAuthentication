"use server";

import connectToDB from "@/database";

export async function registerUserAction() {
  await connectToDB();
}
