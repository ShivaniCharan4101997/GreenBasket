import { useCart } from "../context/CartContext";
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import NotFound from "@/not-found";
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();

  return (
    <Container>
      <Heading span="My" regular="Cart" />
      {cart.length === 0 ? (
        <NotFound rootClass="mt-[100px] h-[40vh]" message={"No item found"}
          title={"Your cart is empty."}></NotFound>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 border rounded p-1 text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
