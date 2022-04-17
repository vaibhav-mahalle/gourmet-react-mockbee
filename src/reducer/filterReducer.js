export const filterReducerFunction = (filterState, action) => {
  switch (action.type) {
    case "SORT":
      return { ...filterState, sortBy: action.payload };
    case "CATEGORY":
      return { ...filterState, category: filterState.category.some(item => item === action.payload)? filterState.category.filter(item => item !== action.payload): filterState.category.concat(action.payload) };
      case "RATING":
        return { ...filterState, rating: action.payload };
      case "CLEAR":
        return {...filterState,sortBy:"",rating:0, category:[]}
    default:
      return filterState;
  }
};
