// src/components/CartModal.jsx
import React from "react";

const CartModal = ({ open, onClose, cartItems, onRemove }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cart Items</h2>
          <button onClick={onClose} className="text-red-500 font-bold text-xl">&times;</button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="flex gap-3 items-center">
                <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                <div>
                  <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModal;
