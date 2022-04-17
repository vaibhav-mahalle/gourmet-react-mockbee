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
          {cartBasket.map((cartItem) => {
            console.log(cartItem.quantity);
            return (
              <CheckoutCard
                _id={cartItem._id}
                title={cartItem.title}
                imageUrl={cartItem.imageUrl}
                qty={cartItem.quantity}
                storeName={cartItem.storeName}
                price={cartItem.price}
                prevPrice={cartItem.prevPrice}
              />
            );
          })}
        </div>
        <div className="flex-center checkout-details">
          <div className="p-1 card card-shadow">
            <div className="font-sm font-bold p-1">Price details</div>
            <hr />
            <div className="p-l-1 p-b-1">
              Price ({QuantityTotal} items) <span className="hor-space">₹{totalAmount}</span>
            </div>
            <div className="p-l-1 p-b-1">
              Discounts <span className="hor-space">₹{prevTotalAmount-totalAmount}</span>
            </div>
            <div className="p-l-1 p-b-1">
              Delivery Charges <span className="hor-space">₹50</span>
            </div>
            <hr />
            <div className="p-l-1 p-b-1 p-t-1">
              TOTAL AMOUNT <span className="hor-space">₹{totalAmount+50}</span>
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
