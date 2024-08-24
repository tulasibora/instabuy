import React, { useState } from "react";
import logo from "../asserts/logo.png";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import megasale from "../asserts/megaSale.png";

const LoginPage = ({ setuserData }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    fullname: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleStartShopping = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setuserData(user);
    navigate("/");
  };
  return (
    <div className="logingpage">
      <div className="loginLeft">
        <div className="logo-headding">
          <img src={logo} alt="" onClick={() => navigate("/")} />
          <h2 onClick={() => navigate("/")}> InstaBuy!</h2>
        </div>
        <div className="instaBuyContent">
          <h1>InstaBuy !</h1>
          <p>One place where brands come together from all across the world.</p>
        </div>
        <div>
          <Form>
            <div className="input-form">
              <input
                type="text"
                value={user.username}
                name="username"
                placeholder="Enter Username"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                value={user.password}
                name="password"
                placeholder="Enter Password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="shopping">
              <button type="submit" onClick={() => handleStartShopping()}>
                Start Shopping
              </button>
              <p>
                Join the Club?
                <a
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ color: "white" }}
                >
                  Click here
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
      <div className="loginRight">
        <img src={megasale} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
