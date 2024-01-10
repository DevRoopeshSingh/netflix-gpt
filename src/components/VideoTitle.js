import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";

const VideoTitle = ({ title, overview, isMute, toggleMute }) => {
  return (
    <div>
      <div className="w-screen aspect-video  pt-[10%] px-6 md:px-24 absolute bg-gradient-to-tr from-black">
        <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
          {overview}
        </p>
        <div className="flex h-20 justify-between">
          <div className="my-4 md:m-0">
            <button className=" bg-white text-black px-6 my-2 md:px-16 md:my-4 rounded-md hover:bg-opacity-60">
              <div className="flex justify-center gap-2 items-center h-10">
                <BsPlayCircleFill style={{ fontSize: "2em", color: "black" }} />{" "}
                Play
              </div>
            </button>
            <button className="hidden md:inline-block bg-gray-500 text-white px-2 m-2 md:px-16 md:m-4 rounded-md hover:bg-opacity-60">
              <div className="flex justify-center gap-2 items-center h-10">
                <AiOutlineInfoCircle style={{ fontSize: "2em" }} /> More Info
              </div>
            </button>
          </div>
          <div className="mute-button px-1  md:px-4 md:mt-4 cursor-pointer ">
            {!isMute ? (
              <BsFillVolumeMuteFill
                onClick={toggleMute}
                style={{ fontSize: "3em", color: "white" }}
              />
            ) : (
              <BsFillVolumeUpFill
                onClick={toggleMute}
                style={{ fontSize: "3em", color: "white" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
