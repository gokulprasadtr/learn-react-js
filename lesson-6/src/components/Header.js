import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
