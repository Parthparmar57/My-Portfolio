import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm a passionate developer with a love for creating beautiful
              and functional web applications. I specialize in front-end
              development, but I also enjoy exploring back-end technologies. My
              goal is to build user-friendly and impactful digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When I'm not coding, I enjoy learning new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="/path/to/your-image.jpg" // Replace with your actual image path
                alt="About Me"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-6">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Tailwind CSS",
              "Git",
              "API Integration",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
