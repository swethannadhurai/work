// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-10">
    <h1 className="text-xl font-bold">SHOPPING APP!!!</h1>
    <button
      onClick={onCartClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Cart ({cartCount})
    </button>
  </nav>
);

export default Navbar;
