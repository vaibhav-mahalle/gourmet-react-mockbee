import { CheckoutCard } from "../components";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartState} = useCart();
  const { cartBasket } = cartState;

  
  return (
    <div className="Page-container">
      <div className="section-heading flex-center p-1 font-lg">
        My Cart({cartBasket.length})
      </div>
      <div className="cart-page">
        <div className="cart-grid">
          {cartBasket.map((cartItem) => {
            return (
              <CheckoutCard
                _id={cartItem._id}
                title={cartItem.title}
                imageUrl={cartItem.imageUrl}
                qty={cartItem.quantity}
                storeName={cartItem.storeName}
                price={cartItem.price}
              />
            );
          })}
        </div>
        <div className="flex-center checkout-details">
          <div className="p-1 card card-shadow">
            <div className="font-sm font-bold p-1">Price details</div>
            <hr />
            <div className="p-l-1 p-b-1">
              Price (2 items) <span className="hor-space">₹500</span>
            </div>
            <div className="p-l-1 p-b-1">
              Discounts <span className="hor-space">₹270</span>
            </div>
            <div className="p-l-1 p-b-1">
              Delivery Charges <span className="hor-space">₹50</span>
            </div>
            <hr />
            <div className="p-l-1 p-b-1 p-t-1">
              TOTAL AMOUNT <span className="hor-space">₹{}</span>
            </div>
            <div className="p-l-1 p-b-1">You will save ₹270 on this order</div>
            <button className="btn btn-success">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
