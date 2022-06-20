import { useCart } from "../context/CartContext";
import { useWish } from "../context/WishContext";

const CheckoutCard = ({_id,title,  imageUrl, qty, price, storeName, prevPrice, category, rating}) => {
  const {cartDispatch} = useCart();
  const { wishState, wishDispatch } = useWish();

  const addToWish = (product) => {
    wishDispatch({
      type: "ADD_TO_WISH",
      payload: product,
    });
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

  const isItemInWishList = () => {
    return wishState.wishBasket.some(element => element._id === _id);
  }
  const removeHandler = (id) =>{
    cartDispatch({type:"REMOVE_TO_CART",payload:id})
  } 
    return (
        <div className="card card-shadow p-1" key={_id}>
        <div className="flex-row">
          <div className="p-1 image">
            <img src={imageUrl} alt={title} />
          </div>
          <div>
            <div className="card-heading-container">
              <h3 className="font-md font-medium">{storeName}</h3>
              <h5 className="font-sm font-light p-b-1">{title}</h5>
            </div>
            <span>Quantity: </span>
            <div className="card-text-container flex-center">
              {/* <a href="#"><span className="material-icons">add</span></a><input className="slider-text-input" type="text" defaultValue={1} /><a href="#"><span className="material-icons">remove</span></a> */}
            </div>
            <div>{qty}</div>
            <span>₹{price}</span><span className="p-l-1"><strike>₹{prevPrice}</strike></span>
          </div>
        </div>
        <button className="btn btn-outline-warning m-t-1 m-b-1" onClick={()=>{ isItemInWishList() ? removeHandler(_id) : addToWish(wishData);removeHandler(_id)}} >
          Move to wishlist
        </button>
        <button className="btn btn-danger" onClick={()=>removeHandler(_id)}>Remove from cart</button>
      </div>
    )
}

export default CheckoutCard;