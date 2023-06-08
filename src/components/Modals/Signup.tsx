import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return alert("Please fill all fields");
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);
  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
      <h3 className="text-xl font-medium text-white">
        Register to Problem Solving App
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-white"
        >
          Email
        </label>
        <input
          onChange={handleChangeInput}
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
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-white"
        >
          Display Name
        </label>
        <input
          onChange={handleChangeInput}
          type="displayName"
          name="displayName"
          id="displayName"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-400 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-purple-700
    "
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          onChange={handleChangeInput}
          type="password"
          name="password"
          id="password"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-400 block w-full p-2.5
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
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
