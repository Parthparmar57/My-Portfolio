import React from "react";

const IndividualProject = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white absolute top-4 right-4"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="space-y-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
