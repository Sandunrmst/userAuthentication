import Link from "next/link";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

export default function RecipeDetailsItem({getRecipeDetails}){
    return <div>
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="mb-10 py-3 px-6 bg-orange-500 mt-4 rounded-md hover:bg-orange-600 transition-colors duration-400 text-white font-bold text-xl inline-block">
                <div className="flex items-center gap-2">
                <Link href={'/'}>Home</Link>
                <IoHomeSharp />
                </div>

            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                    <img 
                    src={getRecipeDetails?.image} 
                    name={getRecipeDetails?.name}
                    className="w-full rounded object-cover "
                    />
                </div>
                <div className="w-full">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails?.name}</h2>
                </div>
                <div className=" mr-5">
                    <p className="text-2xl text-gray-700">{getRecipeDetails?.mealType}</p>
                </div>
                <div>
                    <p>{getRecipeDetails?.cuisine}</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                        {
                            getRecipeDetails?.ingredients.map(item=><li>{item}</li>)
                        }
                    </ul>
                </div>
                <button className="flex items-center gap-3 py-3 px-6 bg-orange-500 mt-4 rounded-md hover:bg-orange-600 transition-colors duration-400 text-white font-bold text-xl">Video Guide <MdOutlineOndemandVideo /></button>
                </div>
            </div>
        </div>
    </div>
}