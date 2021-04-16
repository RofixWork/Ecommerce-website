const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};
const CartReducer = (state = initialState, action) => {
  let findProduct, index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const tPrice = state.totalPrice + product.discountPrice * quantity;
        const tQuantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: tPrice,
          totalQuantities: tQuantities,
        };
      }
    case "INC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findProduct.quantity += 1;
      state.products[index] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + findProduct.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findProduct = state.products.find((pr) => pr.id === action.payload);
      index = state.products.findIndex((pr) => pr.id === action.payload);
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        state.products[index] = findProduct;
        return {
          ...state,
          totalPrice: state.totalPrice - findProduct.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findProduct = state.products.find((pr) => pr.id === action.payload);
      let filtered = state.products.filter((pr) => pr.id !== action.payload);
      return {
        ...state,
        products: filtered,
        totalPrice:
          state.totalPrice - findProduct.discountPrice * findProduct.quantity,
        totalQuantities: state.totalQuantities - findProduct.quantity,
      };
    default:
      return state;
  }
};

export default CartReducer;
