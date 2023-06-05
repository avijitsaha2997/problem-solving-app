import React from "react";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  return (
    <form className="space-y-6 px-6 pb-4">
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
          //   onChange={handleChangeInput}
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
          //   onChange={handleChangeInput}
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
          //   onChange={handleChangeInput}
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
                text-sm px-5 py-2.5 text-center  bg-gradient-to-b from-purple-700 to-purple-900 hover:bg-gradient-to-b hover:from-purple-700 hover:to-black
        "
      >
        Register
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline"
          //   onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
