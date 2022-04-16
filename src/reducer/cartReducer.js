export const cartReducerFunction = (cartState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
          return {...cartState,cartBasket:[...cartState.cartBasket,action.payload]};
      default:
        return cartState;
    }
  };
  