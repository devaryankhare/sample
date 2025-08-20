import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your logo */}
          <div className="text-green-600 font-bold text-xl">
            AUTO CAR
          </div>
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
            <a href="/about" className=" px-4 py-2 rounded font-semibold text-white
                bg-gradient-to-r from-green-500 via-green-600 to-green-700
                bg-[length:200%_auto]
                hover:bg-[position:right_center]
                transition-all duration-500">
              About
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="
                px-4 py-2 rounded font-semibold text-white
                bg-gradient-to-r from-green-500 via-green-600 to-green-700
                bg-[length:200%_auto]
                hover:bg-[position:right_center]
                transition-all duration-500
              "
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
