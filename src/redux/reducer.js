const initialState = {
  user: {},
  userEntered: { username: "", password: "", fullname: "" },
  products: [],
  category: [],
  singleprod: {},
  addCart: {},
  price: 1,
  Quantity: 0,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "userData":
      return {
        ...state,
        user: payload,
      };
    case "user":
      const { name, value } = payload;
      return {
        ...state,
        userEntered: { ...state.userEntered, [name]: value },
      };
    case "AllProducts":
      return {
        ...state,
        products: payload,
      };
    case "category":
      return {
        ...state,
        category: payload,
      };
    case "SelectSingle":
      return {
        ...state,
        singleprod: payload,
      };
    case "addProd":
      return {
        ...state,
        addCart: { ...state.addCart, ...payload },
      };
    case "toatalPrice":
      return {
        ...state,
        price: payload,
      };
    case "totalQuantity":
      return {
        ...state,
        Quantity: payload,
      };
    case "removeCart":
      return {
        ...state,
        addCart: {},
      };
    case "removeUser":
      return {
        ...state,
        user: {},
      };
    default:
      return { ...state };
  }
};
