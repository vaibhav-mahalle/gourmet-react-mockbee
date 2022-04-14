import { Filter, ProductCard } from "../components";
import { useFilter } from "../context/FilterContext";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [productData, setProductData] = useState([]);

  const {filterState,filterDispatch} =useFilter();
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProductData(res.data.products);
    } catch (e) {
      alert("there is some error!!");
    }
  };

  useEffect(() => fetchProducts(), []);

  const sortByPrice = (products, state) => {
    if(state.sortBy === "HIGH_TO_LOW"){
      return products.sort((a,b) => b["price"]-a["price"]);
    }else if(state.sortBy === "LOW_TO_HIGH"){
      return products.sort((a,b) => a["price"]-b["price"]);
    }else{
      return products;
    }
  }

  const sortedData = sortByPrice(productData,filterState);
  return (
    <div className="Page-container">
      <div className="product-listing-container">
        {/* <Filter /> */}
        <div className="filter-container">
          <div className="flex-row">
            <div className="product-listing-heading p-1 font-md">Filters</div>
            <button className="btn-link-noBorder p-l-3">clear</button>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Price</div>
            <div className="flex-row">
              <span className="p-r-3">10</span>
              <span className="p-l-3">10</span>
            </div>
            <div>
              <input
                type="range"
                min={1}
                max={100}
                defaultValue={50}
                className="slider"
                id="myRange"
              />
            </div>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Category</div>

            <div className="align-categories">
              <input type="checkbox" className="m-r-1" />
              <label className="p-t-1 p-b-1">Dessert</label>
            </div>

            <div className="align-categories">
              <input type="checkbox" className="m-r-1" />
              <label className="p-b-1">Indian</label>
            </div>

            <div className="align-categories">
              <input type="checkbox" className="m-r-1" />
              <label className="p-b-1">FastFood</label>
            </div>

            <div className="align-categories">
              <input type="checkbox" className="m-r-1" />
              <label>Chinese</label>
            </div>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Ratings</div>

            <div className="rating-box">
              <input type="radio" className="m-r-1" name="rating-input" />
              <label className="p-t-1 p-b-1">
              4 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input type="radio" className="m-r-1" name="rating-input" />
              <label className="p-t-1 p-b-1">
              3 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input type="radio" className="m-r-1" name="rating-input" />
              <label className="p-t-1 p-b-1">
              2 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input type="radio" className="m-r-1" name="rating-input" />
              <label className="p-t-1 p-b-1">
              1 stars &amp; above
              </label>
            </div>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Sort By Price</div>

            <div className="align-categories">
              <input
                type="radio"
                className="m-r-1"
                name="sort-input"
                id="low" 
                onChange={() => filterDispatch({type:"SORT",payload:"LOW_TO_HIGH"})}
              />
              <label className="p-t-1 p-b-1">Low to high</label>
            </div>

            <div className="align-categories">
              <input
                type="radio"
                className="m-r-1"
                name="sort-input"
                id="high"
                onChange={() => filterDispatch({type:"SORT",payload:"HIGH_TO_LOW"})}
              />
              <label className="p-b-1">High to low</label>
            </div>
          </div>
        </div>
        <div className="product-container">
          {sortedData.map((item) => {
            return (
              <ProductCard
                id={item.id}
                title={item.title}
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
