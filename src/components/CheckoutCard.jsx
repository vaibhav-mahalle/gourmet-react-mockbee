const CheckoutCard = ({_id,title, isLiked, imageUrl, qty, price, rating, storeName, category}) => {
    
    return (
        <div className="card card-shadow p-1" key={_id}>
        <div className="flex-row">
          <div className="p-1 image">
            <img src={imageUrl} alt={title} />
          </div>
          <div>
            <div className="card-heading-container">
              <h3 className="font-md font-medium">{storeName}</h3>
              <h5 className="font-sm font-light p-b-1">{title}</h5>
            </div>
            <span>Quantity: </span>
            <div className="card-text-container flex-center">
              <a href="#"><span className="material-icons">add</span></a><input className="slider-text-input" type="text" defaultValue={1} /><a href="#"><span className="material-icons">remove</span></a>
            </div>
            <span>{price}</span><span className="p-l-1"><strike>₹399</strike></span>
          </div>
        </div>
        <button className="btn btn-outline-warning m-t-1 m-b-1">
          Move to wishlist
        </button>
        <button className="btn btn-outline-danger">Remove from cart</button>
      </div>
    )
}

export default CheckoutCard;