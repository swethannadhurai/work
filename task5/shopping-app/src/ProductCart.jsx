// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="border rounded-xl p-4 shadow hover:shadow-md transition flex flex-col">
    <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
    <h2 className="text-lg font-medium mb-2 line-clamp-2">{product.title}</h2>
    <p className="text-green-600 font-bold mb-2">${product.price}</p>
    <button
      onClick={() => onAddToCart(product)}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
