import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import { FaBalanceScale, FaHandshake, FaAward, FaLeaf } from "react-icons/fa";

const valuesData = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and integrity in all our actions.",
    icon: <FaBalanceScale />,
  },
  {
    id: 2,
    title: "Customer Commitment",
    description:
      "We build lasting relationships that make a positive difference in our customers' lives.",
    icon: <FaHandshake />,
  },
  {
    id: 3,
    title: "Quality",
    description:
      "We deliver outstanding products and exceptional service for true premium value.",
    icon: <FaAward />,
  },
  {
    id: 4,
    title: "Sustainability",
    description:
      "We are committed to reducing our environmental impact and promoting sustainability.",
    icon: <FaLeaf />,
  },
];

const Values = () => {
  return (
    <Container>
      <div className="text-center">
        {/* Heading */}
        <Heading span="Our" regular="Values" />

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-16">
          {/* Left values */}
          <div className="flex flex-col gap-10 text-left md:text-right">
            {valuesData.slice(0, 2).map((val) => (
              <div
                key={val.id}
                className="flex items-center gap-5 md:justify-end group"
              >
                <div className="text-4xl text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{val.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle image */}
          <div className="flex justify-center">
            <img
              src="./assets/basket-full-vegetables.png"
              alt="Basket full of vegetables"
              className="w-72 md:w-96 drop-shadow-xl rounded-xl hover:scale-105 transition-transform"
            />
          </div>

          {/* Right values */}
          <div className="flex flex-col gap-10 text-left">
            {valuesData.slice(2).map((val) => (
              <div key={val.id} className="flex items-center gap-5 group">
                <div className="text-4xl text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Values;
