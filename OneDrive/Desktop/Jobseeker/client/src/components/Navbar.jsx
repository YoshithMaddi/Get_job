import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // ✅ Important

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="logo" />

        {user ? (
          <div className="flex gap-4 items-center text-sm">
            <Link to="/applications" className="text-blue-600 hover:underline">
              Applied Jobs
            </Link>
            <p>/</p>
            <p>Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-gray-500 text-white px-6 sm:px-9 py-2 rounded-2xl"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
