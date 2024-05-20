import React from "react";
import logo from "../../assets/footerLogo.png";
import social1 from "../../assets/social.svg";
import social2 from "../../assets/social (1).svg";
import social3 from "../../assets/social (2).svg";
import social4 from "../../assets/social (3).svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="div1">
        <img src={logo} alt="" />
        <p className="logo-footer-text">
          High level experience in web design and
          <br /> development knowledge, producing quality work.
        </p>
        <hr />

        <p className="copyright">© 2024 All Rights Reserved</p>
      </div>
      <div className="div2">
        <p className="social-title">Follow us</p>
        <div className="social-icon-div">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
          <img src={social4} alt="" />
        </div>
        <p className="social-title">
          Call us <br /> <br />
          <span>+1 800 854-36-80</span>
        </p>
      </div>

      <div className="div3">
        <p className="footer-details-title">Customer Care</p>
        <p className="footer-details-list">About US</p>
        <p className="footer-details-list">Deliveries & Return</p>
        <p className="footer-details-list">Terms & Conditions</p>
        <p className="footer-details-list">Product Return</p>
        <p className="footer-details-list">Wholesale Policy</p>
      </div>
      <div className="div4">
        <p className="footer-details-title">Quick Shop</p>
        <p className="footer-details-list">Pagination</p>
        <p className="footer-details-list">Terms & Conditions</p>
        <p className="footer-details-list">Contact Us</p>
        <p className="footer-details-list">Accessories</p>
        <p className="footer-details-list">Terms of Use</p>
      </div>
      <div className="div5">
        <p className="footer-details-title">Company</p>
        <p className="footer-details-list">Help Center</p>
        <p className="footer-details-list">Address Store</p>
        <p className="footer-details-list">Privacy Policy</p>
        <p className="footer-details-list">Receivers</p>
        <p className="footer-details-list">Store Locations</p>
      </div>
    </div>
  );
}

export default Footer;
