import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛍️ ShopEase</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/cart" className="nav-item cart-button">
          My Bag
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
