import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">My Portfolio</h3>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm">
              Designed & Built by{" "}
              <span className="text-white font-semibold">Parth Parmar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
