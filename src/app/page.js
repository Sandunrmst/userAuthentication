import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('foodimg.jpg')] opacity-90 ">
      <h1 className="text-white font-bold text-6xl shadow-md text-center">
        Welcome to Auth
      </h1>
    </div>
  );
}
