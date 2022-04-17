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

  console.log(productData);
  const sortByPrice = (state,products) => {
    if(state.sortBy === "HIGH_TO_LOW"){
      return [...products].sort((a,b) => b["price"]-a["price"]);
    }else if(state.sortBy === "LOW_TO_HIGH"){
      return [...products].sort((a,b) => a["price"]-b["price"]);
    }else{
      return products;
    }
  }

  console.log(filterState);

  const filteredbyCategory =  (state,data) => {
    console.log("category filter",state,data);
    if(state.category.length > 0){
      return data?.filter(item => state.category.includes(item.category));
    }
    return data;
  }

  const filteredbyRating = (state,data) => {
    console.log(data)
    if(state.rating !== 0){
      return data?.filter(item => state.rating <= item.rating);
    }
    return data;
  }

  const composeFunc = (state,data, ...functions) =>{
    console.log("calling",data)
    return functions.reduce((acc, curr) => curr(state, acc), data);
  }
  console.log(productData);
  const allFilteredData = composeFunc(filterState,productData,sortByPrice,filteredbyCategory,filteredbyRating);

  const {rating,category,sortBy} = filterState;
  return (
    <div className="Page-container">
      <div className="product-listing-container">
        <div className="filter-container">
          <div className="flex-row">
            <div className="product-listing-heading p-1 font-md">Filters</div>
            <button className="btn-link-noBorder p-l-3" onClick={() => filterDispatch({type:"CLEAR"})}>clear</button>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Sort By Price</div>

            <div className="align-categories">
              <input
              checked={filterState.sortBy === "LOW_TO_HIGH"}
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
              checked={filterState.sortBy === "HIGH_TO_LOW"}
                type="radio"
                className="m-r-1"
                name="sort-input"
                id="high"
                onChange={() => filterDispatch({type:"SORT",payload:"HIGH_TO_LOW"})}
              />
              <label className="p-b-1">High to low</label>
            </div>
          </div>
            <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Price</div>
            <div className="flex-row slider">
              <span className="p-r-3">10</span>
              <span className="p-l-3">1000</span>
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
              <input checked={category.includes("Dessert")} type="checkbox" className="m-r-1" onChange={() => filterDispatch({type:"CATEGORY",payload:"Dessert"})} />
              <label className="p-t-1 p-b-1" >Dessert</label>
            </div>

            <div className="align-categories">
              <input checked={category.includes("Indian")} type="checkbox" className="m-r-1" onChange={() => filterDispatch({type:"CATEGORY",payload:"Indian"})}/>
              <label className="p-b-1">Indian</label>
            </div>

            <div className="align-categories">
              <input checked={category.includes("FastFood")}  type="checkbox" className="m-r-1" onChange={() => filterDispatch({type:"CATEGORY",payload:"FastFood"})}/>
              <label className="p-b-1">FastFood</label>
            </div>

            <div className="align-categories">
              <input checked={category.includes("Chinese")} type="checkbox" className="m-r-1" onChange={() => filterDispatch({type:"CATEGORY",payload:"Chinese"})}/>
              <label>Chinese</label>
            </div>
          </div>
          <div className="m-1 p-1 card card-shadow">
            <div className="font-sm font-bold">Ratings</div>
            
            <div className="rating-box">
              <input checked={filterState.rating === 4} type="radio" className="m-r-1" name="rating-input" onChange={() => filterDispatch({type:"RATING",payload:4})} />
              <label className="p-t-1 p-b-1">
              4 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input checked={filterState.rating === 3} type="radio" className="m-r-1" name="rating-input" onChange={() => filterDispatch({type:"RATING",payload:3})}/>
              <label className="p-t-1 p-b-1">
              3 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input checked={filterState.rating === 2} type="radio" className="m-r-1" name="rating-input" onChange={() => filterDispatch({type:"RATING",payload:2})}/>
              <label className="p-t-1 p-b-1">
              2 stars &amp; above
              </label>
            </div>
            <div className="rating-box">
              <input checked={filterState.rating === 1} type="radio" className="m-r-1" name="rating-input" onChange={() => filterDispatch({type:"RATING",payload:1})}/>
              <label className="p-t-1 p-b-1">
              1 stars &amp; above
              </label>
            </div>
          </div>
          
        </div>
        <div className="product-container">
          {allFilteredData.map((item) => {
            console.log(allFilteredData)
            return (
              <ProductCard
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
      </div>
    </div>
  );
};

export default Product;
