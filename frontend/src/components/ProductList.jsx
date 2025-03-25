import React, { useContext } from "react";
import { products } from "../data";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
          <button className="bag" onClick={() => addToCart(product)}>Add to Bag</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
