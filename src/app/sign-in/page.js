"use client";

import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";
import SignUp from "../sign-up/page";
import SignUpButton from "@/components/sign-up-button";

const SignIn = () => {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);

  const router = useRouter();

  async function handleSignIn() {
    const result = await loginUserAction(signInFormData);
    console.log(result);

    if (result?.success) router.push("/");
  }

  return (
    <div className="w-full p-10 flex justify-center h-screen items-center">
      <div className="w-full max-w-md border bottom-1 p-6 rounded-md shadow-md">
        <h1 className="font-semibold text-2xl mb-4">Login</h1>
        <form action={handleSignIn}>
          {userLoginFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={setSignInFormData[controlItem.name]}
                onChange={(event) =>
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          ))}

          <Button className="mt-4" type="submit">
            Sign In
          </Button>
          <div className="flex justify-center items-center gap-2 mt-10 border-2 rounded-md p-2">
            <p className="text-red-500">
              If you don't have an account please.{" "}
            </p>
            <SignUpButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
