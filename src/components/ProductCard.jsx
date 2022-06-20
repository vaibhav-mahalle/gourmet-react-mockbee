import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWish } from "../context/WishContext";
import "../styles/productCard.css";

const ProductCard = ({
  _id,
  title,
  prevPrice,
  imageUrl,
  qty,
  price,
  rating,
  storeName,
  category,
}) => {
  const { cartState, cartDispatch } = useCart();
  const { wishState, wishDispatch } = useWish();

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const addToWish = (product) => {
    wishDispatch({
      type: "ADD_TO_WISH",
      payload: product,
    });
  };

  const isItemInCart = () => {
    return cartState.cartBasket.some((element) => element._id === _id);
  };
  const cartData = {
    _id: _id,
    imageUrl: imageUrl,
    price: price,
    title: title,
    rating: rating,
    prevPrice: prevPrice,
    quantity: qty,
  };

  const wishData = {
    _id: _id,
    imageUrl: imageUrl,
    price: price,
    title: title,
    rating: rating,
    prevPrice: prevPrice,
    quantity: 1,
    category: category,
  };
  return (
    <div className="product-card">
      <div className="flex-center">
        <div className="card card-shadow p-1 product-card-shadow">
          <div className="image product-img-container">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="card-heading-container card-information">
            <h3 className="font-md font-bold">{storeName}</h3>
            <h5 className="font-sm font-medium">{title}</h5>
            <span>₹{price}</span>
          </div>
          <div className="card-badge card-badge-position">{category}</div>
          <div className="favourite-icon favourite-icon-position">
            <span
              className="btn btn-link-noBorder"
              onClick={() => addToWish(wishData)}
            >
              {wishState.wishBasket.find((item) => item._id === _id) ===
              undefined ? (
                <span className="material-icons">favorite_border</span>
              ) : (
                <span className="material-icons">favorite</span>
              )}
            </span>
          </div>
          <div className="product-ratings">
            <div className="ratings-container">
              <span className="btn numbered-rating numbered-rating-position">
                <span>{rating}</span>
                <span className="material-icons">star</span>
              </span>
            </div>
          </div>
          <>
            {isItemInCart() ? (
              <button className="btn btn-success btn-order">
                <Link to="/cart">Go to Cart</Link>
              </button>
            ) : (
              <button
                className="btn btn-success btn-order"
                onClick={() => addToCart(cartData)}
              >
                Order Now
              </button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
