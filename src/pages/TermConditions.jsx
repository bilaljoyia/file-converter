import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function TermConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By using our file converter service, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our service.",
    },
    {
      title: "Use of Service",
      content:
        "Our file converter is provided for personal and commercial use. You may not use the service for any illegal or unauthorized purpose. You agree to comply with all local laws regarding online conduct and acceptable content.",
    },
    {
      title: "File Ownership and Copyright",
      content:
        "You retain all ownership rights to the files you upload. You are responsible for ensuring that you have the right to convert and use the files you upload. We do not claim any ownership of your content.",
    },
    {
      title: "Privacy and Data Protection",
      content:
        "We respect your privacy and protect your personal information. Our service temporarily stores your files for conversion purposes only. Files are automatically deleted after conversion or within 24 hours, whichever comes first.",
    },
    {
      title: "Service Limitations",
      content:
        "We strive to maintain high availability, but we do not guarantee that the service will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue the service at any time without notice.",
    },
    {
      title: "User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        'The service is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will meet your specific requirements or be error-free.',
    },
    {
      title: "Limitation of Liability",
      content:
        "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will notify users of any significant changes. Your continued use of the service after changes constitutes acceptance of the new terms.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-[#ed8900] py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-indigo-200">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="p-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                {section.title}
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
          <div className="mt-10 border-t pt-6">
            <p className="text-sm text-gray-500">
              By using our file converter service, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermConditions;
