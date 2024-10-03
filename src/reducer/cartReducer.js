export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { total: payload.total, cartList: payload.products };

    case "REMOVE_FROM_CART":
      return { total: payload.total, cartList: payload.products };

    case "CLEAR_CART":
      return { total: 0, cartList: [] };

    default:
      throw new Error("No Case Found!");
  }
};
