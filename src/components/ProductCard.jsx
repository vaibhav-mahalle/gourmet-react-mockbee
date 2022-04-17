import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWish } from "../context/WishContext";
const ProductCard = ({_id,title, prevPrice, imageUrl, qty, price, rating, storeName, category}) => {
 const {cartState,cartDispatch} = useCart();
const  {wishState,wishDispatch}  =  useWish();

 const addToCart=(product)=>{
  cartDispatch({
      type:"ADD_TO_CART",
      payload:product,
  })   
}

const addToWish = (product) =>{
  wishDispatch({
    type:"ADD_TO_WISH",
    payload:product,
}) 
}

const cartData = { _id:_id,
  imageUrl:imageUrl,
  price:price,
  title:title,
  rating:rating,
  prevPrice:prevPrice,
  quantity:1};

  const wishData = { _id:_id,
    imageUrl:imageUrl,
    price:price,
    title:title,
    rating:rating,
    prevPrice:prevPrice,
    quantity:1,
    category:category,};
  return (
    <div className="flex-center">
      <div className="card card-shadow p-1">
        <div className="image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-heading-container card-information">
          <h3 className="font-md font-bold">{storeName}</h3>
          <h5 className="font-sm font-medium">{title}</h5>
          <span>₹{price}</span>          
        </div>
        <div className="card-badge card-badge-position">{category}</div>
        <div className="favourite-icon favourite-icon-position">
          <a className="btn btn-link-noBorder" href="#" onClick={()=> addToWish(wishData)}>
            <span className="material-icons">favorite_border</span>
          </a>
        </div>
        <div className="ratings-container">
          <button className="btn numbered-rating numbered-rating-position">
            <span>{rating}</span>
            <span className="material-icons">star</span>
          </button>
        </div>        
        <button className="btn btn-success btn-order" onClick={()=> addToCart(cartData)}>Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
