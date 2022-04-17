import { useContext, createContext, useReducer } from "react";
import { wishReducerFunction } from "../reducer/wishReducerFunction";



const WishContext = createContext();

const WishProvider = ({children}) => {
    const [wishState,wishDispatch] = useReducer(wishReducerFunction, {wishBasket:[]});
    return <WishContext.Provider value={{wishState,wishDispatch}}>
        {children}
    </WishContext.Provider>
}

const useWish = () => useContext(WishContext);

export {useWish , WishProvider};
