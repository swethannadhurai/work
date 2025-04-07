import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import ProductCard from './ProductCart';
import CartModal from "./CartModal";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const handleAddToCart = (product) => {
    const isAlreadyAdded = cartItems.some((item) => item.id === product.id);
    if (isAlreadyAdded) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsModalOpen(true)} />
      <main className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </main>
      <CartModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;


