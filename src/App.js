import "./App.css";
import HomePage from "./Components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import Navbar from "react-bootstrap/Navbar";
import logo from "./asserts/logo.png";
import { Badge, Button } from "react-bootstrap";
import ProductGallary from "./Components/ProductGallary";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import cartButton from "./asserts/CartButton.png";
import CheckOut from "./Components/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsfromCart, toremoveUser } from "./redux/action";
function App() {
  const navigate = useNavigate();
  const storeData = useSelector((state) => state.user);
  const quantity = useSelector((state) => state.Quantity);
  const addCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch();
  const hadlelogOutbtn = () => {
    dispatch(toremoveUser());
    dispatch(removeItemsfromCart());
    navigate("/");
  };
  console.log(addCart);
  return (
    <div>
      <Navbar className="bg-body-tertiary navBar">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={logo} style={{ height: "3rem" }} /> InstaBuy !
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {Object.keys(addCart).length > 0 && (
            <div>
              <img src={cartButton} style={{ height: "7vh", border: "none" }} />
              <Badge
                bg="success"
                style={{ marginRight: "2rem", marginBottom: "1.5rem" }}
              >
                {quantity}
              </Badge>
            </div>
          )}

          <Button
            onClick={() => {
              Object.keys(storeData).length > 0
                ? hadlelogOutbtn()
                : navigate("/signup");
            }}
          >
            {Object.keys(storeData).length > 0 ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productgallery" element={<ProductGallary />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
