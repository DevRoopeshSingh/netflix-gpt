import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  logo as netFlixLogo,
  SUPPORTED_LANGUAGES,
  UserAvatar,
} from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isShowGpt = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // redirect to browse page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (ev) => {
    dispatch(changeLanguage(ev.target.value));
  };

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 cursor-pointer"
        src={netFlixLogo}
        alt="Netflix Logo"></img>

      {user && (
        <div className="flex items-center ">
          {isShowGpt && (
            <select
              className="p-2 m-2 bg-gray-700 text-white rounded-md"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-green-500 my-6 px-4 py-2  rounded-lg text-white"
            onClick={handleGPTSearchClick}>
            {isShowGpt ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 m-2 p-2 "
            alt={"usericon"}
            src={UserAvatar}></img>
          <button
            onClick={handleSignOut}
            className="font-extrabold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
