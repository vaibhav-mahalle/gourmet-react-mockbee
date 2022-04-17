export const wishReducerFunction = (wishState, action) => {
    
    switch (action.type) {
      case "ADD_TO_WISH": 
        const findObj =  wishState.wishBasket.find(item=> item._id ===action.payload._id )
        return (findObj === undefined) ?  {...wishState,wishBasket:[...wishState.wishBasket,action.payload]} :  {...wishState,wishBasket:wishState.wishBasket.filter(item => item._id !== action.payload._id )} ;
        default:
        return wishState;
    }
  };
  