/* eslint-disable @next/next/no-img-element */
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="ProblemSolvingApp"
            className="h-18 w-14 mt-11"
          />
          <p className="bg-gradient-to-l from-purple-700 to-purple-200 inline-block text-transparent bg-clip-text text-3xl font-bold uppercase ml-3 mt-8">
            Problem Solving App
          </p>
        </div>
      </Link>
      <div className="flex items-center">
        <button
          className="bg-gradient-to-l from-black to-purple-500 mt-8 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-white hover:bg-gradient-to-l border-purple-600 border-2 hover:from-purple-500 hover:to-black
                transition-all duration-300 ease-in-out
                "
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
