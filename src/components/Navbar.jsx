import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your logo */}
          <div className="text-green-600 font-bold text-xl">
            AUTO CAR</div>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <a
              href="/"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-500">
              About
            </a>
          </li>
          
          
         
        </ul>
      </div>
    </nav>
  );
}
