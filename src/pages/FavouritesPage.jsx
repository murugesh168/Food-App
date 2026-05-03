import React from "react"
import { useRecipeContext } from "../context/RecipeContext"
import RecipeCard from "./RecipeCard"
 
 function FavouritesPage() {
  const { state } = useRecipeContext();

  if(state.favorites.length  === 0){
    return(
    // <div className="p-4">
    //   <div className="container mx-auto">
    //     <div className="min-h-[70vh] flex items-center justify-center">
    //        <p className="text-lg font-medium"> No Favorite Recipes Added Yet.</p>
    //     </div>
    //   </div>
    // </div>
       <div className="text-center py-20">
          <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-3xl font-bold text-gray-800"> No Favorite Recipes Yet </h2>
            <p className="text-gray-500 mt-3 text-lg"> Save recipes you love and they’ll appear here. </p>
       </div>
    )
  }

    return (
     <div className="p-4">
       <div className="container mx-auto">
         <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {state.favorites.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />
           })}
         </div>

       </div>

     </div>
    )
 }
 
 export default FavouritesPage