import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="flex items-center justify-center">
        <form className="relative bg-white/30 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-xl flex flex-col items-center space-y-4 text-white">
          <h2 className="text-2xl font-semibold">Register</h2>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <input
            type="submit"
            value="Sign Up"
            className="cursor-pointer bg-white/40 font-bold px-6 py-2 rounded-full transition hover:scale-95"
          />

          <h5 className="text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded ml-1 hover:underline"
            >
              Sign In
            </Link>
          </h5>
        </form>
      </div>
      <div className="border">lottifiles</div>
    </div>
  );
};

export default Register;
