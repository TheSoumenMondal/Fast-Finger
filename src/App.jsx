import "./App.css";
import { IoHome } from "react-icons/io5";
import { FaGithub, FaHeart } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { IoIosGitBranch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

function App() {
  return (
    <div className="w-full h-screen bg-[#121716]">
      {/* Message for mobile screens */}
      <h1 className="block sm:hidden text-3xl text-[#059668] font-bold absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none">
        Please Switch to a Desktop Screen 👽
      </h1>

      <div className="hidden sm:grid grid-rows-[15%_70%_15%] px-56 h-full">
        <div className="w-full h-full flex justify-between items-center">
          <h1 className="logo text-[#fefefe] text-xl font-[400]">
            Fast Finger
            <span className="text-[#059668] text-[10px] ml-1">
              Typing Speed
            </span>
          </h1>
          <span className="flex rounded-xl p-2 bg-[#2b3635]">
            <IoHome className="text-[#059668] text-base w-auto" />
            <span className="ml-2 text-xs text-[#059668]">Home</span>
          </span>
        </div>

        {/* Main Content Section */}
        <div className="flex items-center flex-col h-full w-full px-6">
          <div className="timer">
            <div className="title text-center text-[#808987]">Timer</div>

            <div className="text-7xl text-center text-[#44514e]">01</div>
          </div>

          <div className="mainContent flex justify-center items-center flex-col">
            <div className="textContent text-xl flex justify-center items-start mb-16 px-28 mt-6 text-[#049669] tracking-widest h-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vero praesentium, pariatur architecto aperiam sapiente ipsa
              facilis nobis ducimus reprehenderit enim doloremque quo reiciendis
              quaerat neque temporibus? Eaque maxime alias sequi possimus sint.
             
            </div>

            <button className="flex justify-center items-center text-sm gap-1 text-[#808987]">
              <GrPowerReset className="text-[#dfd800] mr-2 text-xl" />
              Start Over
            </button>
          </div>

        <div className=" w-full h-[80%] flex items-center justify-between px-80">
          <span className="text-[#fefefe]">Speed</span>
          <span className="text-[#fefefe]">Accuracy</span>
        </div>

        </div>

        {/* Footer Section */}
        <div className="footer w-full flex justify-between items-center py-4 border-t border-[#2b3635]">
          <div className="flex space-x-8 items-center">
            {/* Reduced size of text in footer */}
            <span className="text-xs text-gray-400 flex items-center">
              <FaGithub className="text-[#ffffff] mr-2" />
              Created by:&nbsp;
              <a
                href="https://github.com/TheSoumenMondal"
                className="text-[#059668] ml-1"
              >
                Soumen&nbsp;
              </a>
              with&nbsp;
              <FaHeart className="text-red-500 ml-1" />
            </span>
            <span className="text-xs text-gray-400 flex items-center">
              <IoIosGitBranch className="text-[#ffffff] mr-2" />
              App Version: 1.0.0
            </span>
            <span className="text-xs text-gray-400 flex items-center">
              <CiCalendarDate className="text-[#ffffff] mr-2" />
              Release Date: 25/10/2024
            </span>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-xs text-[#059668] hover:underline flex items-center"
            >
              <AiOutlineFileText className="text-[#059668] mr-1" /> Privacy
              Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
