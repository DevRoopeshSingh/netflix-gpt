import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <div className="pt-40 px-16">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex h-20">
          <button className=" bg-gray-400 text-white px-16 m-4">
            <div className="flex justify-center gap-2 items-center ">
              <GrCirclePlay style={{ fontSize: "1em" }} /> Play
            </div>
          </button>
          <button className="bg-gray-500 text-white px-16 m-4">
            <div className="flex justify-center gap-2 items-center">
              <AiOutlineInfoCircle style={{ fontSize: "1em" }} /> More Info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
