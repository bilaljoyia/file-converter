import React from "react";
import { FaCog, FaFileAlt, FaMagic, FaUpload } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
    <div className="text-4xl text-[#fea928] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <FaCog />,
      title: "Advanced Settings",
      description:
        "Customize your conversions with our advanced settings. Adjust quality, format, and more to get the perfect output.",
    },
    {
      icon: <FaFileAlt />,
      title: "High Quality Conversion",
      description:
        "Experience top-notch file conversions that maintain the integrity and quality of your original files.",
    },
    {
      icon: <FaMagic />,
      title: "Easy to Use",
      description:
        "Our intuitive interface makes file conversion a breeze. Convert files in just a few clicks, no technical expertise required.",
    },
    {
      icon: <FaUpload />,
      title: "Easy File Upload",
      description:
        "Quickly upload your files from your computer or directly from cloud storage services for instant conversion.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
