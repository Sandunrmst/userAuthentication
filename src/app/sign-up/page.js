"use client";

import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  console.log(signUpFormData);

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  }
  return (
    <div>
      <h1>Welcome to registration</h1>
      <form>
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
