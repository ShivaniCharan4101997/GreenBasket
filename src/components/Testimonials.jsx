import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    message:
      "This platform has transformed the way we work. The team loves it!",
    image: "./assets/customer1.jpg",
  },
  {
    name: "Mark Wilson",
    role: "UI Designer",
    message: "Beautiful UI and smooth experience. Highly recommended!",
    image: "./assets/customer2.jpg",
  },
  {
    name: "Sophia Brown",
    role: "Developer",
    message: "The support team is amazing. Always quick to respond!",
    image: "./assets/customer3.jpg",
  },
  {
    name: "David Smith",
    role: "Marketing Specialist",
    message: "A game changer for our marketing efforts!",
    image: "./assets/customer4.jpg",
  },
  {
    name: "Emily Davis",
    role: "Content Writer",
    message: "Incredible experience from start to finish!",
    image: "./assets/customer5.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <Heading span="What Our Customers" regular="Say" />

      <div className="relative w-full max-w-2xl mx-auto p-6">
        {/* Slide */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all duration-700">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 italic mb-3">
            "{testimonials[current].message}"
          </p>
          <h4 className="font-bold text-lg text-[var(--color-primary-dark)]">
            {testimonials[current].name}
          </h4>
          <span className="text-sm text-gray-500">
            {testimonials[current].role}
          </span>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-[var(--color-secondary)]" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
