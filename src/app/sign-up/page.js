"use client";

import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "@/actions";
import { useRouter } from "next/navigation";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  const router = useRouter();

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  }

  //for register user using server actions
  async function handleSignUp() {
    const result = await registerUserAction(signUpFormData);
    console.log(result);
    console.log(result?.data);

    if (result?.data) router.push("/sign-in");
  }

  return (
    <div>
      <h1>Welcome to registration</h1>
      <form action={handleSignUp}>
        {userRegistrationFormControls.map((formControlItem) => (
          <div key={formControlItem.name}>
            <Label>{formControlItem.label}</Label>
            <CommonFormElement
              value={signUpFormData[formControlItem.name]}
              currentItem={formControlItem}
              onChange={(event) =>
                setSignUpFormData({
                  ...signUpFormData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
        <Button
          disabled={!handleSignUpBtnValid()}
          className="disabled:opacity-65"
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
