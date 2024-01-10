export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LargeBackgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LargeBackgroundImage2 =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const UserAvatar =
  "https://occ-0-3709-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2iWyDq0fR9TY_uztNZ4TcwWkPPdS2NdTtUt3EHjC_rkiEAexSxSUfbrAYTaiI5pcHVs5QMIAhgo1tVaDJr67VjRcr_ZCw.png?r=cad";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      //"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzU1YWJhMmQ3MTcyODAyYjVhZWFjOGM3MzdhZGYxNCIsInN1YiI6IjY1MjQyNGM4NzQ1MDdkMDBlMjEzYzg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qaFGrPGL7kiTy_TFURnmC9rN1-1Sww0vhWfRlV3d5RE",
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = "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";