const ProductCard = ({id,title, isLiked, imageUrl, qty, price, rating, storeName, category}) => {
  return (
    <div className="flex-center">
      <div className="card card-shadow p-1">
        <div className="image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-heading-container card-information">
          <h3 className="font-md font-bold">{storeName}</h3>
          <h5 className="font-sm font-medium">{title}</h5>
          <span>₹{price}</span>          
        </div>
        <div className="card-badge card-badge-position">{category}</div>
        <div className="favourite-icon favourite-icon-position">
          <a className="btn btn-link-noBorder" href>
            <span className="material-icons">favorite_border</span>
          </a>
        </div>
        <div className="ratings-container">
          <button className="btn numbered-rating numbered-rating-position">
            <span>{rating}</span>
            <span className="material-icons">star</span>
          </button>
        </div>        
        <button className="btn btn-success btn-order">Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
