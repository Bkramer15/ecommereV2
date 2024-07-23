import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="md:text-center max-w-lg text-xl font-bold text-gray-800 xl:text-2xl">
              Subscribe to Our Newsletter
            </h1>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full md:w-auto px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div className="ml-5">
            <p className="font-semibold text-gray-700">Quick Links</p>
            <div className="flex flex-col mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-700">
                Home
              </p>
              <p className="text-gray-600 hover:text-blue-700">
                About Us
              </p>
              <p className="text-gray-600 hover:text-blue-700">
                Contact Us
              </p>
              <p className="text-gray-600 hover:text-blue-700">
                Service
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Documentation</p>
            <div className="flex flex-col mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-700">
                Terms & Conditions
              </p>
              <p className="text-gray-600 hover:text-blue-700">
                Privacy Policy
              </p>
              <p className="text-gray-600 hover:text-blue-700">
                Return Policy
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="m-5 text-center text-gray-600">
          &copy; 2022 Coderhariom. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

