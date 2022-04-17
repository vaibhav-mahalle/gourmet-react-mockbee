export const filterReducerFunction = (filterState, action) => {
  switch (action.type) {
    case "SORT":
      return { ...filterState, sortBy: action.payload };
    case "CATEGORY":
      return { ...filterState, category: action.payload };
    default:
      return filterState;
  }
};
