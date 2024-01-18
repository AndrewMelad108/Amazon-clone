export const initalState = {
  basket: [],
  user: null,
};
function appReducer(state = initalState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = newBasket.findIndex((item) => {
        return item.id === action.id;
      });
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("cant delete product in basket");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
}

export default appReducer;
