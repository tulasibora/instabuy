import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import CartImg from "../asserts/CartImage.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsIntoCart,
  removeItemsfromCart,
  setTotalPrice,
  setTotalQuantity,
} from "../redux/action";
const Cart = () => {
  const dispatch = useDispatch();
  const addCart = useSelector((state) => state.addCart);
  const toatalprice = useSelector((state) => state.price);
  const quantity = useSelector((state) => state.Quantity);
  const navigate = useNavigate();
  useEffect(() => {
    let tempQuantity = 0;
    let tempPrice = 0;
    Object.keys(addCart).map((cartItemId) => {
      const details = addCart[cartItemId];
      tempQuantity += details.quantity;
      tempPrice += details.quantity * details.price;
    });
    dispatch(setTotalPrice(tempPrice));
    dispatch(setTotalQuantity(tempQuantity));
  }, []);

  return (
    <div className="MainDivCart">
      <div className="cartTable">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(addCart).map((element, i) => {
              const cartDetails = addCart[element];
              return (
                <tr key={i}>
                  <td>{cartDetails.title}</td>
                  <td>{cartDetails.quantity}</td>
                  <td>{cartDetails.price}</td>
                </tr>
              );
            })}
            <tr>
              <td>Total Price</td>
              <td>{quantity}</td>
              <td>{toatalprice}</td>
            </tr>
          </tbody>
        </Table>
        <Button
          onClick={() => {
            navigate("/checkout");
            dispatch(removeItemsfromCart());
            dispatch(setTotalPrice(1));
            dispatch(setTotalQuantity(0));
          }}
        >
          Check Out
        </Button>
      </div>
      <div className="cartImage">
        <img src={CartImg} />
      </div>
    </div>
  );
};

export default Cart;
