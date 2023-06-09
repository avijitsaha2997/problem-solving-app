import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Please fill all fields");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4 " onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white">
        Sign in to Problem Solving App
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-white"
        >
          Your Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-400 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-purple-700
        "
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-white"
        >
          Your Password
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-purple-700
        "
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-purple-500 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center  bg-gradient-to-b from-purple-900 to-purple-900 hover:bg-gradient-to-b hover:from-purple-700 hover:to-black
            "
      >
        {loading ? "Logging..." : "Log In"}
      </button>
      <div
        className="flex w-full justify-end"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-purple-600 hover:underline text-right"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline"
          onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;
