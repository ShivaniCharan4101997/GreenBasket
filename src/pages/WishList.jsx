import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid [grid-template-columns:_repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
