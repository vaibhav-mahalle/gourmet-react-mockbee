import { Link } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";
import { useWish } from "../context/WishContext";

const Header = () => {
  const { cartState } = useCart();
  const { cartBasket } = cartState;
  const {wishState} = useWish();
  const {wishBasket} = wishState;
  return (
    <nav className="navigation nav-bar flex-row">
      <div className="p-1">
        <Link to="/" className="navbar-brand brand-heading font-lg">
          Gourmet
        </Link>
      </div>
      <div className="flex-row">
        <div className="button-box flex-row">
          <div className="box-pill p-1">
            <Link to="/Products" className="btn btn-link-noBorder font-bold">
              <span className="material-icons">store</span>
            </Link>
          </div>
          <div className="box-pill">
            <Link to="/Wishlist" className="btn btn-link-noBorder cart-icon">
              <span className="material-icons">favorite_border</span>
              <span className="qty-badge-container font-bold">
                {wishBasket?.length}
              </span>
            </Link>
          </div>
          <div className="box-pill">
            <Link to="/Cart" className="btn btn-link-noBorder cart-icon">
              <span className="material-icons">shopping_cart</span>
              <span className="qty-badge-container font-bold">
                {cartBasket?.length}
              </span>
            </Link>
          </div>
          <div className="box-pill p-1">
            <Link to="/Login" className="btn btn-link-noBorder font-bold">
              <span className="material-icons">person</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
