import { Link } from "react-router-dom";
import { categories } from "../backend/db/categories";
import { products } from "../backend/db/products";
import { ProductCard } from "../components";
import "../App.css";
const Home = () => {
  return (
    <div className="Page-container">
      <div className="font-md">Categories</div>
      <div className="grid-4-col">
        {categories.map((item) => {
          return (
            <div>
              <div className="flex-center">
                <div className="card card-shadow m-1 p-1 blur">
                  <div className="image">
                    <img src={item.categoryImg} alt="Ice cream" />
                  </div>
                  <div className="overlay-text-container flex-center">
                    <div className="overlay-text">{item.categoryName}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-md">BestSellers</div>
      
      <div className="grid-4-col">
        {products.map((item) => {
          return (
            <ProductCard
              id={item.id}
              title={item.id}
              isLiked={item.isLiked}
              imageUrl={item.imageUrl}
              qty={item.quantity}
              price={item.price}
              rating={item.rating}
              storeName={item.storeName}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
