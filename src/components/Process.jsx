import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { MdDeliveryDining } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Steps = [
  {
    id: 1,
    title: "Select Products",
    description: "Choose from a wide range of fresh products.",
    number: <TbCircleNumber1Filled />,
    icon: <PiPlant />,
  },
  {
    id: 2,
    title: "Schedule Delivery",
    description: "Pick a delivery time that works for you.",
    number: <TbCircleNumber2Filled />,
    icon: <MdDeliveryDining />,
  },
  {
    id: 3,
    title: "Enjoy Your Meal",
    description: "Sit back and enjoy your delicious meal.",
    number: <TbCircleNumber3Filled />,
    icon: <FaSmileBeam />,
  },
  {
    id: 4,
    title: "Track Your Order",
    description: "Stay updated on your delivery status.",
    number: <TbCircleNumber4Filled />,
    icon: <IoMdTime />,
  },
];

const Process = () => {
  return (
    <Container>
      <div className="text-center mb-10">
        <Heading span="Our" regular="Process" />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {Steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col justify-center items-center p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-gray-200 transition hover:translate-y-1
    shadow-[0_10px_25px_0_rgba(255,165,0,0.5)]
    ${step.id % 2 === 0 ? "lg:-mt-[70px]" : ""}`}
          >
            {/* Number */}
            <div className="text-6xl flex items-center justify-center text-[var(--color-primary)]">
              {step.number}
            </div>

            {/* Icon */}
            <div className="mt-3 text-5xl text-[var(--color-secondary)]">
              {step.icon}
            </div>

            {/* Title & Description */}
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              {step.title}
            </h3>
            <p className="mt-2 text-center text-gray-600 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Process;
