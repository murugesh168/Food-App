import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../service/api';
function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    useEffect(()=>{
        const fetchDetails = async () => {
            const data = await getRecipeById(id);
            setRecipe(data); 
        }
        fetchDetails();
    },[id]);
    if(!recipe){
        return <p>Loading.......</p>
    }
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

       <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover"/>

       <div className="p-6">
         <h1 className="text-3xl font-bold text-gray-800 mb-4"> {recipe.title} </h1>

         <p className="text-gray-600 leading-7"> {recipe.instructions || "No instructions provided."} </p>
       </div>
    </div>
  )
}

export default RecipeDetails