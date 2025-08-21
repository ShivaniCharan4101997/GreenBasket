import React from "react";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-8 place-items-center py-16">
        {/* hero content */}
        <div>
          <h1 className="text-4xl md:text-7xl font-bold ">
            <span className="text-[var(--color-primary)]">Tasty Organic</span>{" "}
            and{" "}
            <span className="text-[var(--color-primary)]">Fresh Groceries</span>{" "}
            delivered to your doorstep
          </h1>
          <p className="mt-4 md:text-lg text-[var(--color-neutral-dark)]">
            Experience the convenience of online grocery shopping with
            GreenBasket.Our Products are Fresh and Organic.
          </p>
          <button className="mt-6 bg-gradient-to-bl from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-2 px-4 rounded cursor-pointer">
            Shop Now
          </button>
        </div>
        {/* hero img */}
        <div>
          <img src="./assets/grocery.png" alt="Hero" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
