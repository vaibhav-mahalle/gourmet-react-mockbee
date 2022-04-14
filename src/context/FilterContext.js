import React, {createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const [filterState,filterDispatch] = useReducer(filterReducerFunction, {sortBy:"",isIndian:false,isChinese:false,isDessert:false,isFastFood:false,rating:5});
    return <FilterContext.Provider value={{filterState,filterDispatch}}>
        {children}
    </FilterContext.Provider>
}


const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
