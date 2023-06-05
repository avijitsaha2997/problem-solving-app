import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <form className="space-y-6 px-6 pb-4">
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
          //   onChange={handleInputChange}
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
          //   onChange={handleInputChange}
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
                text-sm px-5 py-2.5 text-center  bg-gradient-to-b from-purple-700 to-purple-900 hover:bg-gradient-to-b hover:from-purple-700 hover:to-black
            "
      >
        Log in
      </button>
      <button
        className="flex w-full justify-end"
        // onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-purple-600 hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline"
          //   onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;
