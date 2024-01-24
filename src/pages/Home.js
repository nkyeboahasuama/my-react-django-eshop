import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div className="body">
      <header>
        <div className="header-text hero flex-ver">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h2 className="header-green">On all products</h2>
          <p>Save more with coupons</p>

          <div className="flex">
            <div className="shop-btn">Go Shopping</div>

            <Link to="/shop/">
              <BsArrowRightCircle className="arrow-icon" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
