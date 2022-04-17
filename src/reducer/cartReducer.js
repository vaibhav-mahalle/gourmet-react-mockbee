export const cartReducerFunction = (cartState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const findObj = cartState.cartBasket.find(item => item._id == action.payload._id);
        return (findObj === undefined)? {...cartState,cartBasket:[...cartState.cartBasket,action.payload]} : {...cartState,cartBasket:cartState.cartBasket.map(item => item._id === findObj._id ? {...item, quantity:item.quantity + 1}:item  )};
        default:
        return cartState;
    }
  };
  