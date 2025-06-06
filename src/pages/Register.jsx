import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLoginBtn from "../components/SocialLoginBtn";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  const { createUser, updateUser, user, setUser } = use(AuthContext);

  console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_Url = form.photoUrl.value;
    console.log(name, email, password);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photo_Url,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo_Url });
            toast.success("Register Successfully");
            Navigate(location.state || "/");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((error) => {
        toast.error("This email already exists");
      });
  };
  return (
    <div className="min-h-[calc(100vh-250px)] flex flex-col lg:flex-row items-center justify-center ">
      <div className="flex items-center justify-center w-[30%]">
        <form
          onSubmit={handleRegister}
          className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-xl flex flex-col items-center space-y-4 text-white w-full"
        >
          {/* <h2 className="text-2xl font-semibold">Register Please</h2> */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <input
            type="url"
            name="photoUrl"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
          />
          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 shadow-inner focus:outline-none focus:bg-white/30 focus:shadow-lg transition"
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
            value="Register"
            className="cursor-pointer w-full bg-white/10 font-bold px-6 py-2 rounded-full hover:bg-black/20 transition-all"
          />

          <h5 className="text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 text-xs font-semibold rounded ml-1 hover:underline"
            >
              Login
            </Link>
          </h5>
          <div className="flex items-center w-full">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <SocialLoginBtn title="Continue with Google"></SocialLoginBtn>
        </form>
      </div>
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default Register;
