import "./App.css";
import "./styles/style.css";
import { IoHome } from "react-icons/io5";
import { FaGithub, FaHeart } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { IoIosGitBranch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import data from "./utils/data";

const TypingData = data[Math.floor(Math.random() * data.length)].typing_data;

function App() {
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);
  const [correctWrong, setCorrectWrong] = useState([]);

  const inputRef = useRef(null);
  const charRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
    setCorrectWrong(Array(charRef.current.length).fill(""));
  }, []);

  useEffect(() => {
    let interval;
    if (isTyping && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
        let correctChar = charIndex - mistakes;
        let totalTime = maxTime - timeLeft;

        let cpm = correctChar * (60 / totalTime);
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        setCPM(parseInt(cpm, 10));

        let wpm = Math.round((correctChar / 5) * (60 / totalTime));
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        setWPM(wpm);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setIsTyping(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isTyping, timeLeft]);

  const handleChange = (e) => {
    const characters = charRef.current;
    let currentChar = characters[charIndex];
    let typedCharacter = e.target.value.slice(-1);

    if (charIndex < characters.length && timeLeft > 0) {
      if (!isTyping) {
        setIsTyping(true);
      }

      const newCorrectWrong = [...correctWrong];

      if (typedCharacter === currentChar.textContent) {
        setCharIndex(charIndex + 1);
        newCorrectWrong[charIndex] = "correct";
      } else {
        setCharIndex(charIndex + 1);
        setMistakes(mistakes + 1);
        newCorrectWrong[charIndex] = "wrong";
      }

      setCorrectWrong(newCorrectWrong);

      if (charIndex === characters.length - 1) {
        setIsTyping(false);
      }
    }
  };

  const handleReset = () => {
    setCharIndex(0);
    setMistakes(0);
    setTimeLeft(maxTime);
    setWPM(0);
    setCPM(0);
    setCorrectWrong(Array(charRef.current.length).fill(""));
    setIsTyping(false);
    inputRef.current.focus();
  };

  return (
    <div className="w-full h-screen bg-[#121413]">
      <h1 className="block sm:hidden text-3xl text-[#059668] font-bold absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-left select-none">
        Please Switch to a Desktop Screen 👽
      </h1>

      <div className="hidden sm:grid grid-rows-[15%_70%_15%] px-56 h-full">
        {/* Header */}
        <div className="w-full h-full flex justify-between items-center">
          <h1 className="logo text-[#fefefe] text-xl font-[400] select-none">
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

        <div className="flex items-center flex-col h-full w-full px-6">
          <div className="timer">
            <div className="title text-center text-[#808987]">Timer</div>
            <div className="text-7xl text-center text-[#44514e]">
              <strong>{timeLeft}</strong>
            </div>
          </div>

          <div className="mainContent flex justify-center items-center flex-col w-full">
            <input
              type="text"
              className="input-field absolute -z-50 opacity-0"
              ref={inputRef}
              onChange={handleChange}
            />
            <div className="textContent text-xl font-mono h-72 p-6 text-[#808987] tracking-wide">
              {TypingData.split("").map((char, index) => (
                <span
                  key={index}
                  className={`char ${index === charIndex ? "active" : ""} ${
                    correctWrong[index]
                  }`}
                  ref={(e) => (charRef.current[index] = e)}
                >
                  {char}
                </span>
              ))}
            </div>

            <button
              className="flex justify-center items-center text-sm gap-1 text-[#808987]"
              onClick={handleReset}
            >
              <GrPowerReset className="text-[#dfd800] mr-2 text-xl" />
              Start Over
            </button>
          </div>

          <div className="w-full h-[80%] flex items-center justify-between px-80">
            <span className="text-[#fefefe]">WPM : {WPM}</span>
            <span className="text-[#fefefe]">Accuracy : {CPM}</span>
            <span className="text-[#fefefe]">Mistakes : {mistakes}</span>
          </div>
        </div>

        <div className="footer w-full flex justify-between items-center py-4 border-t border-[#2b3635]">
          <div className="flex space-x-8 items-center">
            <span className="text-xs text-gray-400 flex items-center">
              <FaGithub className="text-[#ffffff] mr-2" />
              Created by:&nbsp;
              <a
                href="https://github.com/TheSoumenMondal/Fast-Finger"
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
