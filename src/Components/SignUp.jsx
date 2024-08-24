import React, { useState } from "react";
import "../App.css";
import logo from "../asserts/logo.png";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import buyJoin from "../asserts/buyJoin.png";
import { useDispatch, useSelector } from "react-redux";
import { toStoreuserData, toStoreuserDatainObject } from "../redux/action";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { username, password, fullname } = useSelector(
    (state) => state?.userEntered
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    const payload = {
      name: name,
      value: value,
    };
    dispatch(toStoreuserDatainObject(payload));
  };
  const handleJoinTheClub = (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      password: password,
      fullname: fullname,
    };
    if (username === "" || password == "" || fullname === "") {
      setError("Please Enter All The Fields");
    } else {
      dispatch(toStoreuserData(payload));
      navigate("/productgallery");
    }
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
                value={username}
                placeholder="Enter Username"
                name="username"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="fullName-input">
              <input
                type="text"
                placeholder="Enter Full Name"
                name="fullname"
                value={fullname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {error ? <p className="errorText">{error}</p> : null}

            <div className="shopping">
              <button onClick={(e) => handleJoinTheClub(e)}>
                Join the Club
              </button>

              <a
                // onClick={() => navigate("/login")}
                style={{ color: "white" }}
              ></a>
            </div>
          </Form>
        </div>
      </div>
      <div className="loginRight">
        <img src={buyJoin} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
