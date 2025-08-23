import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  }

  function updateCart(productId, qty) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, qty } : item
      );
    });
  }

  function clearCart() {
    setCart([]);
  }

  const cartTotal = cart?.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCart,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
