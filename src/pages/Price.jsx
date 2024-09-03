import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingTier = ({ title, price, features, isPopular }) => (
  <div
    className={`bg-white border-[#ed8900] hover:scale-105 transition-all duration-300 rounded-lg shadow-lg overflow-hidden ${
      isPopular ? "border-2 border-blue-200" : ""
    }`}
  >
    {isPopular && (
      <div className="bg-[#ed8900] text-white text-center py-2">
        Most Popular
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-2 px-4 rounded-lg text-white font-semibold ${
          isPopular
            ? "bg-[#ed8900] hover:bg-[#ed8900]/80"
            : "bg-gray-600 hover:bg-gray-700"
        } transition duration-300`}
      >
        Choose Plan
      </button>
    </div>
  </div>
);

function Price() {
  const pricingTiers = [
    {
      title: "Basic",
      price: 9.99,
      features: ["5 Projects", "2GB Storage", "Basic Support"],
      isPopular: false,
    },
    {
      title: "Pro",
      price: 19.99,
      features: [
        "Unlimited Projects",
        "10GB Storage",
        "Priority Support",
        "Advanced Analytics",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: 49.99,
      features: [
        "Unlimited Projects",
        "Unlimited Storage",
        "24/7 Dedicated Support",
        "Custom Solutions",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Choose Your Plan
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Select the perfect plan for your needs. Upgrade or downgrade at any
          time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
