import React from "react";
import "./Header.css";
import logo from "../../assets/website-logo-black.png";
import logo1 from "../../assets/search.png";
import logo2 from "../../assets/bag.png";
import logo3 from "../../assets/account.png";
import logo4 from "../../assets/Menu-Icon.png";
import logo5 from "../../assets/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setshow] = useState("");

  return (
    <div className="wraper">
      <div className="container">
        <div className="logo-header">
          <img src={logo} />
        </div>

        <div className="listitem-container flexo">
          <div className="nav-list flexo">
            <ul>
              <li>
                <Link to="#" className="link">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Shop</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="icon-container-header">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
          </div>
          <div className="menu-icon">

            {show === "show" ? <img className="close" src={logo5} alt="" onClick={() => setshow("")} /> : <img src={logo4} alt="" onClick={() => setshow("show")} />}
          </div>
        </div>
      </div>

      <div className={`nav-list-dropdown ${show}`}>

        <ul>
          <li>
            <a to="#">Home</a>
          </li>
          <li>
            <a to="#">About</a>
          </li>
          <li>
            <a to="#">Shop</a>
          </li>
          <li>
            <a to="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
