import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthProvider.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../authentication/firebase";

export default function Navbar() {
  const { currentUser } = useAuth();
  const { userProfile } = useAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Sign out error", error));
  };
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
          {currentUser ? (
            <>
              <li className="font-semibold text-gray-700">
                <span>Welcome, {userProfile?.name || currentUser.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded font-semibold text-white
                             bg-gradient-to-r from-red-500 via-red-600 to-red-700
                             bg-[length:200%_auto]
                             hover:bg-[position:right_center]
                             transition-all duration-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            // If user is NOT logged in, show login and signup buttons
            <>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded font-semibold text-white
                             bg-gradient-to-r from-green-500 via-green-600 to-green-700
                             bg-[length:200%_auto]
                             hover:bg-[position:right_center]
                             transition-all duration-500"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
