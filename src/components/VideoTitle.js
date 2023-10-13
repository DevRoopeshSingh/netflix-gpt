import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="w-screen aspect-video  pt-[10%] px-24 absolute bg-gradient-to-tr from-black">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
        <div className="flex h-20">
          <button className=" bg-gray-400 text-white px-16 my-4 rounded-md hover:bg-opacity-60">
            <div className="flex justify-center gap-2 items-center ">
              <BsPlayCircleFill style={{ fontSize: "2em", color: "white" }} />{" "}
              Play
            </div>
          </button>
          <button className="bg-gray-500 text-white px-16 m-4 rounded-md hover:bg-opacity-60">
            <div className="flex justify-center gap-2 items-center">
              <AiOutlineInfoCircle style={{ fontSize: "2em" }} /> More Info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
