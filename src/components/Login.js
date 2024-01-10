import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LargeBackgroundImage, UserAvatar } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    // checkValidData(email, password);

    let errorMessage = null;

    setErrorMessage(errorMessage);

    isSignInForm
      ? (errorMessage = checkValidData(
          email.current.value,
          password.current.value
        ))
      : (errorMessage = checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        ));

    setErrorMessage(errorMessage);
    if (errorMessage) return;

    // Sign in and Sign up logic below

    if (!isSignInForm) {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // if my response is success it will get an user object
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: UserAvatar,
          })
            .then(() => {
              // Profile updated! then
              //Navigate
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover"
          src={LargeBackgroundImage}
          alt="Netflix Logo"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-14 bg-black w-3/4 md:w-4/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-60 rounded-md
      ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-sm "></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm "
          ref={email}></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm "
          ref={password}></input>
        <p className="p-4 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}>
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
