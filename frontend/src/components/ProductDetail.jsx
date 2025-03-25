import React, { useState } from "react";
import BarcodeScanner from "../components/BarcodeScanner"
import { products } from "../data"; 

const ProductPage = () => {
  const [scannedProduct, setScannedProduct] = useState(null);

  const handleScan = (barcode) => {
    const foundProduct = products.find((p) => p.barcode === barcode);
    if (foundProduct) {
      setScannedProduct(foundProduct);
    } else {
      alert("Product not found!");
    }
  };

  return (
    <div className="product-page">
      <h2>Scan a Product</h2>
      <BarcodeScanner onDetected={handleScan} />

      {scannedProduct && (
        <div className="product-detail">
          <img src={scannedProduct.image} alt={scannedProduct.name} />
          <h3>{scannedProduct.name}</h3>
          <p>{scannedProduct.description}</p>
          <p>${scannedProduct.price}</p>
          <button className="bag">Add to Bag</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
