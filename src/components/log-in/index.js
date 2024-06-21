"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();

  function handleLogin() {
    router.push("/sign-in");
  }

  return <Button onClick={handleLogin}> Login</Button>;
};

export default LogIn;
