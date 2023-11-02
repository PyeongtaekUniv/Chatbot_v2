"use client";

import Chatbot from "../components/Chatbot";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "../styles";

const Page = () => {
  return (
    <div className={``}>
      {/* <div className="flex flex-row bg-white   text-white py-4 pr-4 pl-2 mb-4">
        <img src="/icons/symbol.png" className="w-[30px] h-[30px] mr-2" />
        <h1 className="font-semibold leading-7 text-[18px] text-black mr-3">
          ChatPyeongTaek
        </h1>
        <button
          src=""
          className=" text-light rounded-lg border-[1px]  border-solid bg-white px-2 py-0.5 text-black shadow-md hover:shadow-none  "
        >
          New Chat
        </button>
      </div> */}
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="w-full min-h-screen">
          <Chatbot />
        </div>
      </div>
      {/* Footer */}
      {/* <footer className="bg-blue-500 text-white p-6 mt-4">
        © 2023 Your Chatbot. All rights reserved.
      </footer> */}
    </div>
  );
};

export default Page;
