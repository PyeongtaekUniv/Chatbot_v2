"use client";
import styles from "../styles";

const Sidebar = () => {
  return (
    <div className="flex flex-col max-h-screen min-w-[280px] bg-[#202123]">
      <div className="flex flex-row bg-[#202123] text-white py-4  pl-1">
        <img src="/icons/Daejung.png" className="w-[30px] h-[30px] mr-2" />
        <h1 className="font-semibold leading-7 text-[16px] text-gray-400  mr-3">
          ChatPyeongTaek
        </h1>
        <button
          src=""
          className=" text-[15px] rounded-lg border-[1px]  border-solid border-[#4d4d4f] text-[#ffffff] bg-[#202123] px-2 py-0.5  shadow-sm hover:shadow-none  "
          onClick={() => window.location.reload()}
        >
          New Chat
        </button>
      </div>
      <hr className=" text-center items-center border-1  border-[#61616c] bg-[#61616c] mx-2 " />
      <div
        className={`h-screen bg-[#202123] text-white  rounded-lg p-4 flex flex-col justify-between`}
      >
        <h1 className="text-xl font-bold mb-4"></h1>
        <div className="items-end">
          <ul>
            <li className="mb-5 text-[14px] text-[#ffffff] cursor-pointer">
              Theme
            </li>
            <li className="mb-5 text-[14px] text-[#ffffff]">
              {/* <a href="mailto:nabsj@ptu.ac.kr?subject=Feedback">Feedback</a> */}
              <a
                href="https://github.com/PyeongtaekUniv/PyeongtaekUnivLLMservice/issues"
                target="_blank"
              >
                Feedback
              </a>
            </li>
            <li className="mb-5 text-[14px] text-[#ffffff] cursor-pointer">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
