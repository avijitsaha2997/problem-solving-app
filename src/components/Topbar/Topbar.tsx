/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Logout from "../Buttons/Logout";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import Timer from "../Timer/Timer";

type TopbarProps = {
  problemPage: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <nav className="relative flex h-[70px] w-full shrink-0 items-center px-5 bg-gradient-to-b from-black to-purple-800 text-white shadow-2xl">
      <div
        className={`flex w-full items-center justify-between  ${
          !problemPage ? "max-w-[1200px] mx-auto" : ""
        } `}
      >
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo.png" alt="Logo" className="w-8 h-10 mt-[-6px] " />
        </Link>

        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded  h-8 w-8 cursor-pointer bg-gradient-to-r from-black to-purple-500 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-black"
              // onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] cursor-pointer"
            >
              <div>
                <BsList className="text-white" />
              </div>
              <p className="text-white">Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded  h-8 w-8 cursor-pointer bg-gradient-to-l from-black to-purple-500 text-white hover:bg-gradient-to-l hover:from-purple-500 hover:to-black"
              // onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.buymeacoffee.com/burakorkmezz"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-l from-black to-purple-500 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-white hover:bg-gradient-to-l hover:from-purple-500 hover:to-black hover:border-2  border-purple-700 border-2  
                transition-all duration-300 ease-in-out "
            >
              Premium
            </a>
          </div>

          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }))
              }
            >
              <button
                className="bg-gradient-to-l from-black to-purple-500 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-white hover:bg-gradient-to-l hover:from-purple-500 hover:to-black hover:border-2  border-purple-700 border-2  border-transparent
                transition-all duration-300 ease-in-out "
              >
                Sign In
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <div className="border-2 border-purple-700 rounded-full">
                <img
                  src="/face4.webp"
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="rounded-full "
                />
              </div>
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-purple-900 text-white p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
