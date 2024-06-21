"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignUpButton = () => {
  const router = useRouter();

  function handleSignup() {
    router.push("/sign-up");
  }

  return <Button onClick={handleSignup}> SignUp</Button>;
};

export default SignUpButton;
