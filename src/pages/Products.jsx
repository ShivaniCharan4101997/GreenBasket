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

  const bannerImages = {
    All: "/assets/all-banner.jpg",
    Fruits: "/assets/fruits-banner.jpg",
    Vegetables: "/assets/basket-full-vegetables.png",
    Dairy: "/assets/dairy-banner.jpg",
    Meat: "/assets/meat-and-seafood.png",
    Seafood: "/assets/meat-and-seafood.png",
    Vegan: "/assets/tofu.png",
  };

  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <Container>
      <div className="text-center">
        {/* Banner with Heading Overlay */}
        <div className="relative w-full mt-6">
          <img
            src={bannerImages[activeTab]}
            alt={`${activeTab} banner`}
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
            <Heading
              span="Our"
              regular="Products"
              className="text-white drop-shadow-lg"
            />
          </div>
        </div>

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
        <div className="grid [grid-template-columns:_repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
