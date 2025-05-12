import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-4">
              Feel free to reach out to me for collaborations or just a friendly
              chat.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="material-icons text-indigo-500 mr-2">
                  Email
                </span>
                <a
                  href="mailto:your-email@example.com"
                  className="hover:underline"
                >
                  parth.3p2007@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="material-icons text-indigo-500 mr-2">
                  Phone
                </span>
                <a href="tel:+1234567890" className="hover:underline">
                  +91 8980251571
                </a>
              </p>
              <p className="flex items-center">
                <span className="material-icons text-indigo-500 mr-2">
                  Location
                </span>
                Ahemdabad , India 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
