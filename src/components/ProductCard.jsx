import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => {
      if (prev <= 1) return 0;
      return prev - 1;
    });
  };

  const handleAddToCart = () => {
    setQuantity(1);
  };

  return (
    <div className="group border rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 bg-white relative flex flex-col">
      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition"
      >
        {wishlist ? (
          <GoHeartFill className="text-red-500 text-lg" />
        ) : (
          <GoHeart className="text-gray-500 text-lg" />
        )}
      </button>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <h3 className="mt-4 font-semibold text-lg text-gray-800 text-center">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 text-center line-clamp-2">
        {product.description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold text-[var(--color-primary)]">
          ₹{product.price}
          <span className="text-sm font-normal text-gray-500">
            {" "}
            / {product.unit}
          </span>
        </span>
        {product.bestseller && (
          <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-md font-medium">
            Bestseller
          </span>
        )}
      </div>

      {/* Cart Section */}
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="mt-5 w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-2.5 rounded-xl font-medium hover:opacity-90 hover:scale-[1.02] transition"
        >
          <HiShoppingBag className="text-lg" /> Add to Cart
        </button>
      ) : (
        // Show quantity controls
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={decreaseQty}
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            -
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={increaseQty}
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
