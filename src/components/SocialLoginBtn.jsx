import React, { use } from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const SocialLoginBtn = ({ title }) => {
  const { signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle();
    navigate(location.state || "/");
  };
  return (
    <button
      onClick={handleGoogleLogin}
      aria-label="Login with Google"
      type="button"
      className="flex items-center justify-center w-full space-x-3 border rounded-full p-2  dark:border-gray-600 cursor-pointer"
    >
      <TbBrandGoogle size={20} />
      <p>{title}</p>
    </button>
  );
};

export default SocialLoginBtn;
