import React, { useState } from "react";
import { FaDesktop, FaLink, FaChevronDown, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div className="bg-[#ed8900]/40  ">
        <div className="container mx-auto px-10 flex items-center justify-between min-h-[500px]">
          <div className="w-1/2  pr-8">
            <h2 className="text-5xl font-bold mb-6">File Converter</h2>
            <p className="mb-6 text-lg">
              Welcome to BrandName, your ultimate online file conversion
              solution. We support a wide range of formats, including:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Audio: MP3, WAV, AAC, and more</li>
              <li>Video: MP4, AVI, MOV, and others</li>
              <li>Documents: PDF, DOCX, TXT, and various formats</li>
              <li>Images: JPG, PNG, SVG, and many more</li>
            </ul>
            <p className="text-lg">
              Experience fast, secure, and high-quality conversions with just a
              few clicks!
            </p>
          </div>
          <div className="w-1/2 flex flex-wrap justify-end">
            {["Image", "Video", "PDF", "Document"].map((type) => (
              <button
                key={type}
                className="bg-white hover:bg-[#fea928] text-blue-600 font-semibold py-3 px-6 rounded-lg m-2 hover:text-white transition duration-300 text-lg shadow-md"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* ***** Select Button *****? */}
      <section className=" p-12 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#ed8900] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#fe9800] transition duration-300 flex items-center"
          >
            Select File <FaChevronDown className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg">
              <button
                onClick={() => document.getElementById("fileInput").click()}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
              >
                <FaDesktop className="mr-2" /> Select from computer
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                <FaLink className="mr-2" /> By URL
              </button>
            </div>
          )}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />
        </div>
        {selectedFile && (
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl flex items-center justify-between">
            <div className="flex items-center">
              <FaFileAlt className="text-blue-600 mr-2" />
              <span className="font-semibold">{selectedFile.name}</span>
            </div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Select Format
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Convert
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
