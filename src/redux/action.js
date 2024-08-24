export const toStoreuserData = (payload) => {
  return {
    type: "userData",
    payload: payload,
  };
};
export const toStoreuserDatainObject = (payload) => {
  return {
    type: "user",
    payload: payload,
  };
};
export const toStoreProductDetailsData = (payload) => {
  return {
    type: "AllProducts",
    payload: payload,
  };
};
export const setCategoryproducts = (payload) => {
  return {
    type: "category",
    payload: payload,
  };
};
export const addItemsIntoCart = (payload) => {
  return {
    type: "addProd",
    payload: payload,
  };
};
export const selectedProduct = (payload) => {
  return {
    type: "SelectSingle",
    payload: payload,
  };
};
export const setTotalPrice = (payload) => {
  return {
    type: "toatalPrice",
    payload: payload,
  };
};
export const setTotalQuantity = (payload) => {
  return {
    type: "totalQuantity",
    payload: payload,
  };
};
export const removeItemsfromCart = (payload) => {
  return {
    type: "removeCart",
    payload: payload,
  };
};
