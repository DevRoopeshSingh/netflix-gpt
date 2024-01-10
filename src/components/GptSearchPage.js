import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LargeBackgroundImage2 } from "../utils/constants";

function GptSearchPage() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={LargeBackgroundImage2}
          alt="Netflix Logo"></img>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearchPage;
