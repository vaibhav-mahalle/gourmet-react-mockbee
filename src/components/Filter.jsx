const Filter = () => {
  return (
    <div className="filter-container">
      <div className="flex-row">
        <div className="product-listing-heading p-1 font-md">Filters</div>
        <div className="btn-link-noBorder p-l-3">clear</div>
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
        <label className="p-t-1 p-b-1">
          <input type="radio" className="m-r-1" name="rating-input" />4 stars
          &amp; above
        </label>
        <label>
          <input type="radio" className="m-r-1" name="rating-input" />3 stars
          &amp; above
        </label>
        <label>
          <input type="radio" className="m-r-1" name="rating-input" />2 stars
          &amp; above
        </label>
        <label>
          <input type="radio" className="m-r-1" name="rating-input" />1 stars
          &amp; above
        </label>
      </div>
      <div className="m-1 p-1 card card-shadow">
        <div className="font-sm font-bold">Sort By</div>
        <label className="p-t-1 p-b-1">
          <input type="radio" className="m-r-1" name="sort-input" />
          Price-low to high
        </label>
        <label className="p-b-1">
          <input type="radio" className="m-r-1" name="sort-input" />
          Price-High to low
        </label>
      </div>
    </div>
  );
};

export default Filter;
