/* eslint-disable @next/next/no-img-element */
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Signup from "@/components/Modals/Signup";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import React from "react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  return (
    <div className="bg-gradient-to-b from-black to-purple-900 h-screen relative">
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
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default AuthPage;
