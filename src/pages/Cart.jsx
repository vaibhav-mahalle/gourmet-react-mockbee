import { CheckoutCard } from "../components";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartState} = useCart();
  const { cartBasket } = cartState;
  const totalAmount = cartBasket.reduce( (acc,curr)=> acc+ curr.price*curr.quantity,0);
  const prevTotalAmount = cartBasket.reduce( (acc,curr)=> acc+ curr.prevPrice*curr.quantity,0);
  const QuantityTotal = cartBasket.reduce( (acc,curr)=> acc+ curr.quantity,0);
  
 
  return (
    <div className="Page-container">
      <div className="section-heading flex-center p-1 font-lg">
        My Cart({cartBasket.length})
      </div>
      <div className="cart-page">
        <div className="cart-grid">
          {cartBasket.map((item) => {
            return (
              <CheckoutCard
                _id={item._id}
                title={item.title}
                isLiked={item.isLiked}
                imageUrl={item.imageUrl}
                qty={item.quantity}
                price={item.price}
                rating={item.rating}
                storeName={item.storeName}
                category={item.category}
                prevPrice={item.prevPrice}
              />
            );
          })}
        </div>
        <div className="flex-center checkout-details">
          <div className="p-1 card card-shadow">
            <div className="font-sm font-bold p-1">Price details</div>
            <hr />
            <div className="p-l-1 p-b-1">
              Price ({QuantityTotal} items) <span className="hor-space">₹{prevTotalAmount}</span>
            </div>
            <div className="p-l-1 p-b-1">
              Discounts <span className="hor-space">₹{prevTotalAmount-totalAmount}</span>
            </div>
            <div className="p-l-1 p-b-1">
              Delivery Charges <span className="hor-space">₹{(cartBasket.length === 0)? 0 : 50}</span>
            </div>
            <hr />
            <div className="p-l-1 p-b-1 p-t-1">
              TOTAL AMOUNT <span className="hor-space">₹{(totalAmount !== 0)?totalAmount+50:totalAmount}</span>
            </div>
            <div className="p-l-1 p-b-1">You will save ₹{prevTotalAmount-totalAmount} on this order</div>
            <button className="btn btn-success">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
