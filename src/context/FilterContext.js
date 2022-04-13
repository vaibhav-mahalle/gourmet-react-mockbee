import React, { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();



const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
