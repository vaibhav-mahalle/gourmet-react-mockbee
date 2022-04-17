import React, {createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const [filterState,filterDispatch] = useReducer(filterReducerFunction, {sortBy:"",rating:0, category:''});
    return <FilterContext.Provider value={{filterState,filterDispatch}}>
        {children}
    </FilterContext.Provider>
}


const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
