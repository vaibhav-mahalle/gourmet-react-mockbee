import {Link} from "react-router-dom";
import "../App.css";

const Header = () => {
    return(
        <nav className="navigation nav-bar flex-row">
        <div className="p-1">
          <Link to="/" className="navbar-brand brand-heading font-lg" >Gourmet</Link>
        </div>
        <div className="flex-row">
          <div className="cart-input flex-row">
            <input type="text" placeholder="search" />
            <Link to="/" className="btn-link-noBorder">   
              <span className="material-icons">search</span>
            </Link>
          </div>
          <div className="button-box flex-row">
            <div className="box-pill">
              <Link to="/Wishlist" className="btn btn-link-noBorder">
                <span className="material-icons">favorite_border</span>
              </Link>
            </div>
            <div className="box-pill">
              <Link to="/Cart" className="btn btn-link-noBorder">
                <span className="material-icons">shopping_cart</span>
              </Link>
            </div>
            <div className="box-pill p-1">
              <Link to="/Products" className="btn btn-link-noBorder font-bold">
                products
              </Link>
            </div>
            <div className="box-pill p-1">
              <Link to="/Login" className="btn btn-link-noBorder font-bold">
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header;