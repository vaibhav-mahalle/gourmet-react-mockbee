import { useContext, createContext, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cartReducer";



const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartState,cartDispatch] = useReducer(cartReducerFunction, {cartBasket:[]});
    return <CartContext.Provider value={{cartState,cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export {useCart , CartProvider};
