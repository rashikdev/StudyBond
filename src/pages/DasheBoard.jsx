import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";

const DasheBoard = () => {
  const { user } = use(AuthContext);
  return (
    <div className="min-h-[calc(100vh-250px)] mt-25 bg-gray-400">
      <div className="flex gap-10">
        <div className="flex flex-col w-[40%] border h-[40rem]">
          <h2>Profile</h2>
          <div>
            <h4>Name</h4>
            <img src={user?.photoURL} alt="" />
          </div>
          <div></div>
        </div>
        <div className="w-[60%] border h-[40rem]">ddf</div>
      </div>
    </div>
  );
};

export default DasheBoard;
