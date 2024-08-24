import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { Button, Card, CardImg, CardText, CardTitle } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsIntoCart,
  selectedProduct,
  setCategoryproducts,
} from "../redux/action";
const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryProd = useSelector((state) => state.category);
  const addCart = useSelector((state) => state.addCart);
  const location = useLocation();
  const product = location.state;
  const { title, price, id } = location.state;
  useEffect(() => {
    dispatch(selectedProduct(product));
    async function getProductBasedOnCategory() {
      let response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${
          product.category.id || 1
        }/products?limit=20&offset=0`
      );
      dispatch(setCategoryproducts(response.data));
    }
    getProductBasedOnCategory();
  }, []);

  const addingCartItem = () => {
    if (id in addCart) {
      const currentItem = addCart[id];
      const payload = {
        [id]: {
          title,
          price,
          quantity: Number(currentItem.quantity + 1),
        },
      };
      dispatch(addItemsIntoCart(payload));
    } else {
      const payload = {
        [id]: {
          title,
          price,
          quantity: Number(1),
        },
      };
      dispatch(addItemsIntoCart(payload));
    }

    navigate("/cart");
  };

  return (
    <div className="ProductMainDiv">
      <div className="leftDiv">
        <div className="prouductImages">
          {product.images.map((image, i) => {
            return <img key={i} src={image} className="productSingleImage" />;
          })}
        </div>

        <div className="productDes">
          <div className="productDesDiv">
            <img src={product.images[0]} className="Proctimage" />
            <h2 className="title">{product.title}</h2>
            <h3>
              ${product.price}{" "}
              <span className="pricedis"> ({product.discountPercentage}%)</span>
            </h3>
            <Button className="AddtoCartBtn" onClick={() => addingCartItem()}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="ProductsCategory">
        <h3> Other products in the same category</h3>
        <div className="categoryProducts">
          {categoryProd.map((cateprod) => {
            if (cateprod.id == product.id) return;
            else
              return (
                <Card key={cateprod.id} className="cardProducts">
                  <CardImg
                    src={cateprod.images[0]}
                    className="cardImageProducts"
                  />
                  <div>
                    <CardTitle id="TitleProducts">{cateprod.title}</CardTitle>
                    <CardText id="TitleProducts">$ {cateprod.price}</CardText>
                  </div>
                  <Button
                    style={{ fontSize: "0.5rem" }}
                    className="viewProductButtonCategory"
                    onClick={() => {
                      navigate(`/productdetails/${cateprod.id} `, {
                        state: cateprod,
                      });
                    }}
                  >
                    View Item
                  </Button>
                </Card>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
