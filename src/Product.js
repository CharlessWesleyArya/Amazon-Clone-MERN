import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>₹</small>
          <strong>299.00</strong>
        </p>
        <div className="product_rating">
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt=""
      />
    </div>
  );
}

export default Product;
