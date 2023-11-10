import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons"; // 'X' 아이콘을 위해 faTimes를 가져옵니다.

const SidebarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="md:hidden fixed z-10 top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#343541] border-b border-[#61616c]">
        {/* 버거 아이콘 버튼 */}
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white" }}
            className="text-black w-[20px] h-[20px] cursor-pointer"
          />
        </button>

        {/* 중간 내용: "New Chat" 버튼 */}
        <p className="text-white">New Chat</p>

        {/* 끝 내용: '+' 버튼 */}
        <button>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "white" }}
            className="text-black w-[20px] h-[20px] cursor-pointer"
            onClick={() => window.location.reload()}
          />
        </button>
      </div>

      {/* 사이드바 */}
      <div
        className={`fixed inset-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 bg-[#202123] w-full shadow-lg`}
      >
        <div className="flex flex-col h-screen">
          {/* 닫기 버튼 */}
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="z-30">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "black" }}
                className="w-[20px] h-[20px] cursor-pointer"
              />
            </button>
          </div>

          {/* 사이드바 나머지 내용 */}
          <div className="flex-col p-4">
            <div className="flex flex-row items-center justify-between mb-4">
              {/* 여기에 'justify-between' 클래스를 추가했습니다. */}
              <div className="flex flex-row items-center">
                <img
                  src="/icons/Daejung.png"
                  className="w-[30px] h-[30px] mr-2"
                  alt="Logo"
                />
                <h1 className="font-semibold leading-7 text-[16px] text-gray-400  mr-3">
                  ChatPyeongTaek
                </h1>
              </div>
              <button
                className="text-[15px] rounded-lg border-[1px] border-solid border-[#4d4d4f] text-[#ffffff] bg-[#202123] px-2 py-0.5  shadow-sm hover:shadow-none"
                onClick={() => window.location.reload()}
              >
                New Chat
              </button>
            </div>
            <div className="mt-10">
              <ul>
                <li className="mb-2 text-[#ffffff]  cursor-pointer">Theme</li>
                <li className="mb-2 text-[#ffffff]  cursor-pointer">
                  <a href="mailto:nabsj@ptu.ac.kr?subject=Feedback">Feedback</a>
                </li>
                <li className="mb-5 text-[14px] text-[#ffffff] cursor-pointer">
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 사이드바가 열려 있을 때 오버레이 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar} // 오버레이 클릭 시 사이드바 닫기
        ></div>
      )}

      {/* 페이지 나머지 내용 */}
      <div className={`flex flex-1 ${isSidebarOpen ? "filter blur-sm" : ""}`}>
        {/* 페이지 내용은 여기에 들어갑니다. */}
        {/* 예를 들어, 메인 컨텐츠나 다른 컴포넌트들… */}
      </div>
    </>
  );
};

export default SidebarMobile;
