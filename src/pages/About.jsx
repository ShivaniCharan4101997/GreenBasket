import Heading from "../ui/Heading";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-20">
      {/* Container */}
      <Container>
        <div className="text-center">
          {/* Heading */}
          <Heading span="About" regular="Us" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Welcome to GreenBasket, your trusted partner for fresh, organic, and
            sustainable grocery shopping. We believe in delivering farm-fresh
            products directly to your doorstep while supporting local farmers.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3069/3069177.png"
              alt="Fresh Produce"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fresh & Organic
            </h3>
            <p className="text-gray-600">
              We source the freshest fruits, vegetables, and groceries, ensuring
              you get the best quality every time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
              alt="Fast Delivery"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your groceries delivered to your home quickly and efficiently,
              saving you time and effort.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2983/2983792.png"
              alt="Eco-Friendly"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              We promote eco-friendly packaging and sustainable practices to
              protect our planet.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-green-700">
            Join us in making grocery shopping fresh, simple, and sustainable.
          </h3>
          <Link to="products">
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition">
              Shop Now
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
