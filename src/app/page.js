import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default async function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('foodimg.jpg')] opacity-90 ">
      <h1 className="text-white font-bold text-6xl shadow-md text-center">Welcome to MealMaster</h1>
      <div className="mt-10 flex items-center gap-2 px-6 py-4 bg-orange-600 rounded-md text-2xl text-white font-bold hover:bg-orange-700 hover:pr-8 transition-all duration-500 group">
      <Link href={"/recipe-list"}>Explore Recipes</Link>
      <FaRegArrowAltCircleRight className="transition-transform duration-500 group-hover:translate-x-2.5"/>
      </div>
    </div>
  );
}
