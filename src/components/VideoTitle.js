import React, { useRef, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  const [isMute, setIsMute] = useState(true);
  const handleMute = () => {
    setIsMute(!isMute);
  };

  return (
    <div>
      <div className="w-screen aspect-video  pt-[10%] px-24 absolute bg-gradient-to-tr from-black">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
        <div className="flex h-20">
          <button className=" bg-white text-black px-16 my-4 rounded-md hover:bg-opacity-60">
            <div className="flex justify-center gap-2 items-center ">
              <BsPlayCircleFill style={{ fontSize: "2em", color: "black" }} />{" "}
              Play
            </div>
          </button>
          <button className="bg-gray-500 text-white px-16 m-4 rounded-md hover:bg-opacity-60">
            <div className="flex justify-center gap-2 items-center">
              <AiOutlineInfoCircle style={{ fontSize: "2em" }} /> More Info
            </div>
          </button>
        </div>
        <div className="mute-button px-4 mt-4 cursor-pointer float-right ">
          {isMute ? (
            <BsFillVolumeMuteFill
              onClick={handleMute}
              style={{ fontSize: "3em", color: "white" }}
            />
          ) : (
            <BsFillVolumeUpFill
              onClick={handleMute}
              style={{ fontSize: "3em", color: "white" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
