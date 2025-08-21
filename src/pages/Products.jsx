import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import ProductCard from "../components/ProductCard";
import productsData from "../productList.json";

const Products = () => {
  const productCategories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Meat",
    "Seafood",
    "Vegan",
  ];
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <Container>
      <div className="text-center">
        <Heading span="Our" regular="Products" />

        {/* Tabs */}
        <div className="flex gap-4 mt-6 justify-center flex-wrap">
          {productCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 border rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "border-gray-300 hover:bg-[var(--color-primary)] hover:text-white"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
