import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import AnimatedNumber from "./AnimatedNumber";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [quantity, setQuantity] = useState(() => {
    if (product.id == 1) {
      const isItemExist = cart.filter(item => item.id == product.id)
      if (isItemExist.length > 0) {
        isItemExist[0].qty
      }
    }
    return 0
  });

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const increaseQty = () => {
    if (quantity == 0) {
      addToCart(product)
    }
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => {
      if (prev <= 1) return 0;
      return prev - 1;
    });
  };

  return (
    <div className="group border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 bg-white relative flex justify-between flex-col">
      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition"
      >
        {isInWishlist(product.id) ? (
          <GoHeartFill className="text-red-500 text-lg" />
        ) : (
          <GoHeart className="text-gray-500 text-lg" />
        )}
      </button>

      <div className="">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="text-start">
          <h3 className="mt-4 font-semibold text-lg text-gray-800 ">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500  line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Cart Footer */}
      <div className="">
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
        <div className="mt-2">
          {quantity === 0 ? (
            <button
              onClick={increaseQty}
              className=" w-full flex items-center justify-center gap-2 bg-[var(--color-primary)]
          border border-transparent
           text-white py-2.5 rounded-xl font-medium hover:text-green-600 hover:bg-transparent hover:border-green-600  transition"
            >
              <HiShoppingBag className="text-lg" /> <span>Add to Cart</span>
            </button>
          ) : (
            <AnimatedNumber
              data={quantity}
              negativeCb={decreaseQty}
              positiveCb={increaseQty}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
