import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import './Nav.css';

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="logo-container">
        <a href=""><h1>🛒</h1></a>
      </div>
      <div className="nav-value-container">
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
