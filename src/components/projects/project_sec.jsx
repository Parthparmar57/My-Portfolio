import React, { useState } from "react";
import IndividualProject from "./Individual_Projects";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.com",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "An online store with a modern UI and payment integration.",
      github: "https://github.com/your-username/ecommerce-app",
      live: "https://ecommerce-app.com",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather forecasting app using OpenWeather API.",
      github: "https://github.com/your-username/weather-app",
      live: "https://weather-app.com",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A blogging platform with user authentication and CRUD features.",
      github: "https://github.com/your-username/blog-platform",
      live: "https://blog-platform.com",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Project Modal */}
      {selectedProject && (
        <IndividualProject
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Project;
