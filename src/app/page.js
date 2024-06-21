import { fetchAuthUserAction } from "@/actions";
import LogIn from "@/components/log-in";
import Logout from "@/components/log-out";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();
  // if (!currentUser?.success) redirect("/sign-in");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-black font-bold text-4xl text-center mt-6">
        Welcome to Auth Page
      </h1>
      <div className=" flex flex-col p-6 rounded-md border-2 mt-10 ">
        {!currentUser?.success ? (
          <p className="mb-4">Kindly log in to access your profile.</p>
        ) : (
          <>
            <h3 className="font-semibold">
              Your Name:{" "}
              <span className="font-bold text-blue-800">
                {currentUser?.data?.userName}
              </span>
            </h3>
            <p className="font-semibold mb-6">
              Your Email Address:{" "}
              <span className="font-bold text-blue-800">
                {currentUser?.data?.email}
              </span>
            </p>
          </>
        )}
        {!currentUser?.success ? <LogIn /> : <Logout />}
      </div>
    </div>
  );
}
