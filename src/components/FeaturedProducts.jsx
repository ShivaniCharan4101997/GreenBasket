import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import ProductCard from "./ProductCard";
import productsData from "../productList.json";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  // 👉 Show only first 4 products
  const featured = productsData.slice(0, 4);

  return (
    <Container>
      <div className="text-center">
        <Heading span="Featured" regular="Products" />

        {/* Grid for only featured products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* "See All" Button */}
        <div className="mt-8">
          <Link
            to="/products"
            className="px-6 py-3 rounded-full bg-[var(--color-secondary)] text-white font-semibold shadow hover:bg-[var(--color-secondary-dark)] transition"
          >
            See All
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
