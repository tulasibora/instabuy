import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardText, CardTitle } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toStoreProductDetailsData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const ProductGallary = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    async function getProductGallary() {
      let response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      dispatch(toStoreProductDetailsData(response.data));
    }
    getProductGallary();
  }, []);

  return (
    <div className="ProductsMainDiv">
      <h2> Select a Product</h2>
      <div className="cardDiv">
        {products.map((product) => {
          return (
            <Card key={product.id} className="card">
              <CardImg src={product.images[0]} className="cardImage" />
              <div className="cardTitle">
                <CardTitle>{product.title}</CardTitle>
                <CardText>$ {product.price}</CardText>
              </div>
              <Button
                className="viewProductButton"
                onClick={() =>
                  navigate(`/productdetails/${product.id} `, {
                    state: product,
                  })
                }
              >
                View Item
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallary;
