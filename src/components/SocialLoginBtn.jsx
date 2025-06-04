import React from "react";
import { TbBrandGoogle } from "react-icons/tb";

const SocialLoginBtn = ({title}) => {
  return (
    <button
      aria-label="Login with Google"
      type="button"
      className="flex items-center justify-center w-full space-x-3 border rounded-full p-2  dark:border-gray-600"
    >
      <TbBrandGoogle size={20}/>
      <p>{title}</p>
    </button>
  );
};

export default SocialLoginBtn;
