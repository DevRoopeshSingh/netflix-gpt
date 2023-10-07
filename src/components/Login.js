import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Logo"></img>
      </div>
      <form
        className="absolute p-14 bg-black w-4/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-60 rounded-md
      ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-sm "></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm "></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm "></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {/* */}
          {isSignInForm
            ? " New to Netflix? sign up now"
            : "Already Registered? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
