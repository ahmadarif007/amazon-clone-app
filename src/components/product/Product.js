import React from "react";
import "./Product.css";

function Product({ title, price, rating, img }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={img} alt="product-image" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
