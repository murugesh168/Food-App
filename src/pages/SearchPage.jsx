import React, {useState }from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';
import { getRecipesDetails } from '../service/api';
import Pagination from '../components/Pagination';

const RECIPES_PER_PAGE = 8;

function SearchPage() {
    const {state, dispatch} = useRecipeContext();
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(state.recipes.length / RECIPES_PER_PAGE);
    const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
    const currentRecipes = state.recipes.slice(startIndex, startIndex + RECIPES_PER_PAGE);

    const handleSearch = async() => {
        try {
            const data = await getRecipesDetails(query);
            dispatch({
                type : "SET_RECIPES", 
                payload : data.results || []
            });
            setCurrentPage(1);

        }catch (error) {            
            console.error("Error fetching recipes:", error);
        }
    };

    // useEffect(()=> {
    //     if(totalPages > 0 && currentPage > totalPages){
    //         setCurrentPage(totalPages);
    //     }
    // },[currentPage, totalPages]);

  return (
    <div className='p-4'>
        <div className='container mx-auto'>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <input type="text" placeholder="Search delicious recipes..." value={query} onChange={(e) => setQuery(e.target.value)} 
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

              <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition">
                Search 
              </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {currentRecipes.map((recipe) =>(
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
            </div>
            {state.recipes.length === 0 && (
                <p className='text-center text-lg font-medium'> Search for recipes to see results here.</p>
            )}
            <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}   
            />
        </div>
    </div>
  )
}
export default SearchPage