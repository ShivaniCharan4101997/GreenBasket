import Hero from "../components/Hero";
import Category from "../components/Category";
import Values from "../components/Values";
import Discount from "../components/Discount";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <FeaturedProducts />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;
