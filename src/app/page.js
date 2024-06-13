import Link from "next/link";


export default async function Home() {
  return (
    <div>
      <h1>Welcome to Recipe App</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>

    </div>
  );
}
