import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-50"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Welcome to My Portfolio
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              Discover my projects, skills, and journey as a developer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-md bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Photo Section */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300" // Replace with your image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Hero;
