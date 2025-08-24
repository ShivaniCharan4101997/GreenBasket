import { useCallback, useState } from "react";
import Container from "@/ui/Container";
import ProductCard from "@/components/ProductCard";
import productsData from "@/productList.json";
import { productCategories, bannerImages } from "./constants";
import Banner from "@/components/Banner"
import { useSearchParams } from "react-router-dom";
import NotFound from "@/not-found";

export default function Products() {

  const [activeTab, setActiveTab] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const seachQuery = searchParams.get("search")
  const handleFilter = useCallback((item) => {return () => setActiveTab(item)})

  let products = productsData

  // filter item for routes like /products?search="banana"
  if (seachQuery) {
    products = productsData.filter((item) =>
      item.name.toLowerCase().includes(seachQuery.toLowerCase())
    )
  }

  // filter item for categories like /products?search="banana"
  if(activeTab !=="All"){
    products = productsData.filter((item) => item.category === activeTab);
  }

  function resetQuery() {
    setSearchParams({})
  }

  return (
    <Container>
      <div className="text-center">
        {/* Banner with Heading Overlay */}
        <Banner image={bannerImages[activeTab]}
          alt={`${activeTab} banner`}
          highlightText="Our" text="Products" />

        {/* Tabs */}
        <div className="flex gap-4 mt-6 justify-center flex-wrap">
          {productCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 border rounded-full text-sm font-medium transition-colors ${activeTab === category
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "border-gray-300 hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              onClick={handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {
          products.length > 0 ?
            <div className="grid [grid-template-columns:_repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-3 gap-8 mt-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            :
            <NotFound
              rootClass="mt-[100px] h-[50vh]"
              title={"Product not found"} message={seachQuery &&`with this "${seachQuery}" query`} >
              <button
                onClick={resetQuery}
                className="text-center font-medium  no-underline rounded-4xl transition-colors w-[200px] px-5 py-2.5 bg-black text-white  hover:bg-green-300 hover:text-black">
                Reset filter
              </button>
            </NotFound>}
      </div>
    </Container>
  );
};

