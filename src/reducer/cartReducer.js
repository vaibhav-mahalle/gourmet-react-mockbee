export const cartReducerFunction = (cartState, action) => {
  const findObj = cartState.cartBasket.find(
    (item) => item._id == action.payload._id
  );
  switch (action.type) {
    case "ADD_TO_CART":
      return (findObj === undefined)
        ? {
            ...cartState,
            cartBasket: [...cartState.cartBasket, action.payload],
          }
        : {
            ...cartState,
            cartBasket: cartState.cartBasket.map((item) =>
              item._id === findObj._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
    case "REMOVE_TO_CART":
      return {
        ...cartState,
        cartBasket: cartState.cartBasket.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "REMOVE_SINGLE_QTY":
      return (findObj === undefined) ?  {
        ...cartState,
        cartBasket: cartState.cartBasket.filter(
          (item) => item._id !== action.payload
        ),
      } : {
        ...cartState,
        cartBasket: cartState.cartBasket.map((item) =>
          item._id === findObj._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }
    default:
      return cartState;
  }
};
