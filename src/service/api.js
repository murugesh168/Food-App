const BASE_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "8111034459c346f690c6fb542f8b9705";

export const getRecipesDetails =  async(query)=> {
  const response = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
  );
  return response.json();
};

export const getRecipeById = async(id) => {
    const response = await fetch(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
    return response.json();
};