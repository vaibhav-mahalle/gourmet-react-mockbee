import React from "react";
import {Routes , Route} from "react-router-dom";
import { Cart, Home, Login, Products, Signup, Wishlist, Error } from "../pages";

const RoutingPath = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Wishlist" element={<Wishlist/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    )
}

export default RoutingPath;