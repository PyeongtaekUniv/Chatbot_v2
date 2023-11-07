"use client";
import styles from "../styles";

const Sidebar = () => {
  return (
    <div className="flex flex-col max-h-screen min-w-[280px] bg-[#FFFFFF]">
      <div className="flex flex-row bg-white text-white py-4  pl-1 mb-4">
        <img src="/icons/symbol.png" className="w-[30px] h-[30px] mr-2" />
        <h1 className="font-semibold leading-7 text-[16px] text-black mr-3">
          ChatPyeongTaek
        </h1>
        <button
          src=""
          className=" text-[15px] rounded-lg border-[1px]  border-solid bg-white px-2 py-0.5 text-black shadow-sm hover:shadow-none  "
          onClick={() => window.location.reload()}
        >
          New Chat
        </button>
      </div>
      <div
        className={`h-screen bg-[#fafbfc] text-white  rounded-lg p-4 flex flex-col justify-between`}
      >
        <h1 className="text-xl font-bold mb-4"></h1>
        <div className="items-end">
          <ul>
            <li className="mb-2 text-black">Theme</li>
            <li className="mb-2 text-black">
              <a href="mailto:nabsj@ptu.ac.kr?subject=Feedback">Feedback</a>
            </li>
            <li className="mb-2 text-black">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
