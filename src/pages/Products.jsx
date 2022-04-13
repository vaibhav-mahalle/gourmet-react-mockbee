import { Filter, ProductCard } from "../components";
// import { products } from "../backend/db/products";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProductData(res.data.products);
    } catch (e) {
      alert("there is some error!!");
    }
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div className="Page-container">
      <div className="product-listing-container">
        <Filter />
        <div className="product-container"> 
        {productData.map((item) => {
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
    </div>
  );
};

export default Product;
