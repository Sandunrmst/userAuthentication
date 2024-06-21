import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();
  if (!currentUser?.success) redirect("/sign-in");

  return (
    <div className="w-full min-h-screenflex">
      <h1 className="text-black font-bold text-6xl text-center">
        Welcome to Auth
      </h1>

      <h3>{currentUser?.data?.userName}</h3>
      <p>{currentUser?.data?.email}</p>
      <Logout />
    </div>
  );
}
