"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="flex h-128 w-96 border rounded-lg border-black justify-center items-center">
        <form className="flex flex-col gap-8" action={dispatch}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="my-4 bg-black text-white rounded-md" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
