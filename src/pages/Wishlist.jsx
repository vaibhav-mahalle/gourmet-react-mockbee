import { Link } from "react-router-dom";
import { ProductCard } from "../components";
import {FaCartArrowDown} from "react-icons/fa";
import { useWish } from "../context/WishContext";
const Wishlist = () => {
  const { wishState } = useWish();
  const { wishBasket } = wishState;

  return (
    <div className="Page-container">
      {wishBasket.length === 0 ? <><div className="empty-page-container"><Link to="/products"><FaCartArrowDown size={250} color={"var(--bg-color)"} className="cursor-pointer"/></Link></div></> :<>
      <div className="section-heading flex-center p-1 font-lg">
        My Wishlist({wishBasket.length})
      </div>
      
        <div className="wish-grid">
          {wishBasket.map((cartItem) => {
            return (
              <ProductCard
                _id={cartItem._id}
                title={cartItem.title}
                isLiked={cartItem.isLiked}
                imageUrl={cartItem.imageUrl}
                qty={cartItem.quantity}
                price={cartItem.price}
                rating={cartItem.rating}
                storeName={cartItem.storeName}
                category={cartItem.category}
                prevPrice={cartItem.prevPrice}
              />
            );
          })}
        </div>
        </>}
    </div>
  );
};

export default Wishlist;
