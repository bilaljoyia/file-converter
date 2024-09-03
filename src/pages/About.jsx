import React from "react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our innovative platform! We are a team of passionate
              professionals dedicated to revolutionizing the way people interact
              with technology. Our mission is to create intuitive, powerful
              tools that empower individuals and businesses to achieve their
              goals efficiently and effectively.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With years of experience in software development and user
              experience design, we've crafted a suite of products that combine
              cutting-edge technology with user-friendly interfaces. Our
              commitment to excellence and continuous improvement drives us to
              constantly refine and expand our offerings.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Join us on this exciting journey as we shape the future of digital
              solutions. Whether you're a small business owner, a large
              corporation, or an individual looking to enhance your
              productivity, we have the tools and expertise to help you succeed.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-[#ed8900] h-24"></div>
              <div className="px-4 py-6">
                <div className="flex justify-center -mt-16">
                  <img
                    className="w-32 h-32 rounded-full border-4 border-white"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-center">
                  John Doe
                </h2>
                <p className="text-gray-600 text-center">Founder & CEO</p>
                <div className="mt-4 flex flex-col space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FaLinkedin className="mr-2" />
                    linkedin.com/in/johndoe
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-2" />
                    john.doe@example.com
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2" />
                    San Francisco, CA
                  </div>
                </div>
                <button className="mt-6 w-full bg-[#ed8900] text-white py-2 px-4 rounded-lg hover:bg-[#ed8900]/60 transition duration-300">
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
