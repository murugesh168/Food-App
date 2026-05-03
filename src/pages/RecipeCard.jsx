import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';


function RecipeCard({recipe}) {
    const { image, title, id } = recipe;
    const { state, dispatch } = useRecipeContext();

    const isFavorite = state.favorites.some((fav)=> fav.id === id);

    const handleFavorite = () => {
        if(isFavorite){
            dispatch({type: "REMOVE_FROM_FAVORITES", payload: recipe });
        }else {
            dispatch({type: "ADD_TO_FAVORITES", payload: recipe });
        }
    }
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">

      <img src={image} alt={title} className="w-full h-52 object-cover"/>

      <div className="p-4"> 
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]"> {title} </h2>

        <div className="flex gap-2 mt-4">
          <Link to={`/recipe/${id}`} className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition">
            View Details
          </Link>

          <button onClick={handleFavorite} className={`flex-1 px-3 py-2 rounded-lg text-white transition
             ${isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>
             {isFavorite ? "Remove" : "Add"}
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default RecipeCard