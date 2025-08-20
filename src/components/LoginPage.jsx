import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import Firebase auth instance
import { auth } from "../authentication/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loader from "./Loader";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "email") setEmail(value);
  //   if (name === "password") setPassword(value);
  // };

  // Email/Password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email,password);
      toast.success("Logged in successfully!", { position: "top-center" });
      setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 6000);
    } catch (error) {
      toast.error(`Login failed: ${error.message}`, { position: "top-center" });
    }
    finally{
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };

  // Google OAuth login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!", { position: "top-center" });
      setLoading(true);
      navigate("/");
    } catch (error) {
      toast.error(`Google Login Error: ${error.message}`, { position: "top-center" });
    }
    finally{
      setLoading(false);
    }
  };

  return (
     loading ? (
      <Loader />
    ) : (
      <div className="flex min-h-screen">
        {/* Left side */}
        <div
          id="img"
          className="hidden md:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 items-center justify-center text-white p-10"
        >
          <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-0 right-0 animate-pulse"></div>
          <div className="relative z-10 max-w-md text-center">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              Welcome Back 👋
            </h1>
            <p className="text-lg opacity-90">
              Login to continue your journey with us. Stay connected, explore, and grow together!
            </p>
          </div>
        </div>
        {/* Right side - login form */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-6">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Login
              </button>
            </form>
            {/* Google Login */}
            <p className="text-center text-sm text-gray-600 mt-4">
              or{" "}
              <button
                onClick={handleGoogleLogin}
                className="text-purple-600 hover:underline"
              >
                Login with Google
              </button>
            </p>
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  );
}
