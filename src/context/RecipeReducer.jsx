const recipeReducer = (state,action) => {
 switch(action.type){
    case "SET_RECIPES":
        return {
            ...state,
            recipes : action.payload,
        };
    case "ADD_TO_FAVORITES":
        return {
            ...state,
            favorites : [state.favorites, action.payload]
        };
    case "REMOVE_FROM_FAVORITES" :
        return {
            ...state,
            favorites : state.favorites.filter( recipe => recipe.id
                !== action.payload.id
            )
        };
    case "SET_FILTER" :
        return {
            ...state,
          filter : action.payload
        };
    default :
        return state;
 }

}

export default recipeReducer