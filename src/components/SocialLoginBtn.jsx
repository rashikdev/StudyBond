import React, { use } from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const SocialLoginBtn = ({ title }) => {
  const { signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login Successfully");
      navigate(location.state || "/");
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      aria-label="Login with Google"
      type="button"
      className="flex items-center justify-center w-full space-x-3 border rounded-full p-2  border-gray-600 hover:bg-white/20 cursor-pointer"
    >
      <TbBrandGoogle size={20} />
      <p>{title}</p>
    </button>
  );
};

export default SocialLoginBtn;
