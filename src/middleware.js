import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const checkPublicPath = path === "/sign-in" || path === "/sign-up";

  //access current cookies in user browser
  const getCookies = cookies();
  const token = getCookies.get("token")?.value || "";

  //check if we are on the bublic path like /sign-in
  //and that time token should not be empty then redirect to home page
  if (checkPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  //this mean if checkPublicPath is false it's mean we are in diferent path
  //and token is empty mean user not authenticate right now
  if (!checkPublicPath && token === "") {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }
}

export const config = {
  matcher: ["/sign-in", "/sign-up"],
};
