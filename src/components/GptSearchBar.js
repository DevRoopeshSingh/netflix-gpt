import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-28 flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 mx-4 my-6 col-span-9"
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}></input>
        <button className="col-span-3 m-6 py-4 px-4 bg-red-500 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
