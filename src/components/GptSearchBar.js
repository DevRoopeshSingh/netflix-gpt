import React, { useReducer, useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const getSearchMovie = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dataArr = [
          {
            finish_reason: "stop",
            index: 0,
            message: {
              content:
                "Bareilly Ki Barfi , Golmaal Returns, Welcome Back,Khosla Ka Ghosla,Hera Pheri 2, Jabariya Jod, Kabhi Khushi Kabhie Gham, Andaz Apna Apna, Chupke Chupke, Amar Akbar Anthony, Angoor, Padosan, Hera Pheri , Bhool Bhulaiyaa , 3 Idiots, Masti, Lage Raho Munna Bhai , Hungama , Welcome, No Entry, Housefull, Hulchul ",
            },
          },
        ];

        resolve(dataArr);
      }, 3000);
    });
  };

  // search move in tmdb

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchTextValue = searchText.current.value;

    const query =
      "Act as a movie recommendation system  and suggest some movie for the query : " +
      searchTextValue +
      " . only give me 5 names of five movies, comma separated like the given example result given ahead. Example Results: Gadar, Sholay, Don, Golmal, Koi mil gaya";

    /* useful when used with openai paid version
      const gptResults = await openai.chat.completions.create({
       messages: [{ role: "user", content: query }],
       model: "gpt-3.5-turbo",
     });
    */

    const result = await getSearchMovie();
    const resultMovieContent = result[0]?.message?.content;
    console.log("resultMovieContent", resultMovieContent);

    if (!resultMovieContent) {
      //todo : write error handling
    }

    const gptMovies = resultMovieContent.split(",");

    // for each movie i will get the result from tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // return all the promise
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResult })
    );
  };

  return (
    <div className="pt-28 flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          className="p-4 mx-4 my-6 col-span-9"
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptPlaceHolder}></input>
        <button
          className="col-span-3 m-6 py-4 px-4 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
