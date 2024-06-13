import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes(){
    try{
        const apiResponse =await fetch('https://dummyjson.com/products')
        const data = await apiResponse.json()

        return data?.recipes 
    }catch(e){
        throw new Error(e)
    }
}

//create this component async for fetch data
export default async function Recipes(){

    const recipeList = await fetchListOfRecipes()
    return <RecipeList/>
}