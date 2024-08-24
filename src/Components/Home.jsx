import Carousel from "react-bootstrap/Carousel";
import React, { Children } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../App.css";
import image1 from "../asserts/Carousel-1.png";
import image2 from "../asserts/Carousel-2.png";
import image3 from "../asserts/Carousel-3.png";
import company1 from "../asserts/company1.png";
import company2 from "../asserts/company2.png";
import company3 from "../asserts/company3.png";
import company4 from "../asserts/company4.png";
import company5 from "../asserts/company5.png";
import company6 from "../asserts/company6.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomePage = () => {
  const storeData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleBrowseProducts = () => {
    if (Object.keys(storeData).length > 0) {
      navigate("/productgallery");
    } else {
      navigate("/signup");
    }
  };
  return (
    <div>
      <div className="HomePage">
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="textInItem">
                  <h2>SHOP WITH UTMOST</h2>
                  <h1>
                    <i>STYLE</i>
                  </h1>
                  <p>
                    Shop from the latest trendy Colths to the best garments.
                    With star shopper you sove 10% every time you shop!
                  </p>

                  <div className="ComapanyLogos-hedding">
                    <h4>Products are available from:</h4>
                    <div className="ComapanyLogos">
                      <img src={company1} alt="" />
                      <img src={company2} alt="" />
                      <img src={company3} alt="" />
                      <img src={company4} alt="" />
                      <img src={company5} alt="" />
                      <img src={company6} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={image1} alt="" className="carousel-Image" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="textInItem">
                  <h2>SHOP WITH UTMOST</h2>
                  <h1>
                    <i>STYLE</i>
                  </h1>
                  <p>
                    Shop from the latest trendy Colths to the best garments.
                    With star shopper you sove 10% every time you shop!
                  </p>
                  <div></div>
                  <div className="ComapanyLogos-hedding">
                    <h4>Products are available from:</h4>
                    <div className="ComapanyLogos">
                      <img src={company1} alt="" />
                      <img src={company2} alt="" />
                      <img src={company3} alt="" />
                      <img src={company4} alt="" />
                      <img src={company5} alt="" />
                      <img src={company6} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={image2} alt="" className="carousel-Image" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <div className="textInItem">
                  <h2>SHOP WITH UTMOST</h2>
                  <h1>
                    <i>STYLE</i>
                  </h1>
                  <p>
                    Shop from the latest trendy Colths to the best garments.
                    With star shopper you sove 10% every time you shop!
                  </p>
                  <div></div>
                  <div className="ComapanyLogos-hedding">
                    <h4>Products are available from:</h4>
                    <div className="ComapanyLogos">
                      <img src={company1} alt="" />
                      <img src={company2} alt="" />
                      <img src={company3} alt="" />
                      <img src={company4} alt="" />
                      <img src={company5} alt="" />
                      <img src={company6} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={image3} alt="" className="carousel-Image" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;

// <Button className="browesButton" onClick={handleBrowseProducts}>
//   Brouse Products
// </Button>;
