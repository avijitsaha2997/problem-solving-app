/* eslint-disable @next/next/no-img-element */
import AuthModal from "@/components/Modals/AuthModal";
import Signup from "@/components/Modals/Signup";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-700 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img
            // src="https://media.licdn.com/dms/image/C5112AQF333kFVsGkDg/article-cover_image-shrink_720_1280/0/1545832233930?e=2147483647&v=beta&t=enTHKOgSLYpnYxsvSxymtBZrPAgwO3k5hJ_RR0Sm7aw"
            src="/hero.png"
            alt="Hero img"
            className="mt-10"
          />
        </div>
        {/* <AuthModal /> */}
      </div>
    </div>
  );
};
export default AuthPage;
