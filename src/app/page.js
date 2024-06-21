import { fetchAuthUserAction } from "@/actions";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  return (
    <div className="w-full min-h-screenflex">
      <h1 className="text-black font-bold text-6xl text-center">
        Welcome to Auth
      </h1>

      <h3>{currentUser?.data?.userName}</h3>
      <p>{currentUser?.data?.email}</p>
    </div>
  );
}
