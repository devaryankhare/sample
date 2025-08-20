// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-semibold mb-4 md:mb-0">
          MyWebsite
        </h1>
        
        {/* Links */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
