import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLoginBtn from "../components/SocialLoginBtn";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { loginUser } = use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        Navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <div className="min-h-[calc(100vh-250px)] flex flex-col lg:flex-row items-center justify-center md:mt-0 mt-25">
      <div className="flex items-center justify-center w-[87%] lg:w-[30%]">
        <form
          onSubmit={handleLogin}
          className="relative bg-zinc-900 p-8 rounded-2xl border border-white/30 shadow-xl flex flex-col items-center space-y-4 w-full text-white"
        >
          <h2 className="text-2xl font-semibold">Login Please</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            >
              {show ? <TbEyeClosed size={23} /> : <TbEye size={23} />}
            </button>
          </div>
          <input
            type="submit"
            value="Login"
            className="cursor-pointer w-full bg-white/10 font-bold px-6 py-2 rounded-full transition hover:scale-95"
          />

          <h5 className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 text-xs font-semibold rounded ml-1 hover:underline"
            >
              Register
            </Link>
          </h5>
          <div className="flex items-center w-full">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <SocialLoginBtn title="Login with Google"></SocialLoginBtn>
        </form>
      </div>
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default Login;
