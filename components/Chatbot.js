"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const textAreaRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textArea = textAreaRef.current;

    // 입력에 따라 높이 조정
    textArea.style.height = "auto"; // 높이를 잠시 'auto'로 설정하여 scrollHeight를 다시 계산하게 함
    const newHeight = `${Math.max(textArea.scrollHeight, 30)}px`; // 40px는 최소 높이

    // 입력이 줄어들었을 때만 높이를 감소
    if (textArea.style.height !== newHeight) {
      textArea.style.height = newHeight;
    }
  };

  const handleExampleClick = async (exampleText) => {
    setInput(exampleText); // 입력 상태를 예제 텍스트로 설정합니다.
    await sendMessage(exampleText); // sendMessage 함수를 호출하여 메시지를 전송합니다.
  };

  const isMobileDevice = () => {
    return window.innerWidth <= 768;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Enter의 기본 동작 방지
      sendMessage();

      // 메시지 전송 후 textarea를 리셋합니다.
      setInput(""); // 이 부분이 setState를 사용하여 input 상태를 리셋하는 코드가 되어야 합니다.
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, type: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Send this input to the API to get a response.
      const response = await fetch("/api/get-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botResponse = data.answer.result; // API 응답에서 result 값을 가져옵니다.

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, type: "bot" },
      ]);
      const textArea = textAreaRef.current;
      textArea.style.height = "40px";
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "서버와의 통신 중 오류가 발생했습니다.", type: "bot" },
      ]);
    } finally {
      setIsLoading(false);
      const textArea = textAreaRef.current;
      if (textArea) {
        textArea.style.height = "40px";
        textArea.scrollTop = 0; // 스크롤을 맨 위로 설정
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#343541] relative ">
      <div className={` ${styles.flexCenter} my-auto`}>
        <div
          className={` flex-grow  overflow-y-auto max-h-[calc(100vh-100px)]`}
        >
          {messages.length === 0 ? (
            <div
              className={`${styles.flexCenter} w-[100%]  max-w-3xl xl:max-w-4xl mx-auto `}
            >
              <div className="flex flex-col w-full space-y-16">
                <div className="flex flex-row space-x-7">
                  <div className="flex flex-col">
                    <div className="flex flex-row bg-[#343541]  text-white py-4 pr-4 md:pl-2 px-5 md:px-0">
                      <img
                        src="/icons/Daejung.png"
                        className="w-[35px] h-[35px] mr-2"
                      />
                      <h1
                        className={`${styles.flexCenter} font-semibold leading-7 text-[18px] text-gray-400 mr-3`}
                      >
                        ChatPyeongTaek
                      </h1>
                      <div
                        className={`${styles.flexCenter} text-[12px] rounded-lg 
                        font-semibold border-solid bg-[#fbe692] px-2 my-1
                        text-[#937102] `}
                      >
                        {" "}
                        v1.3b
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[16px] md:pl-2 text-gray-400 px-5 md:px-0">
                        한국어 LM으로 만든 평택대학교 서비스 <br />{" "}
                        ChatPyeongTaek
                      </p>
                      <p className="text-[10px] text-gray-400 md:pl-2 px-5">
                        현재 얼리액세스 기간입니다. 사용자가 요청한 질문, 답변,{" "}
                        <br />
                        IP정보가 저장되며 모델 고도화 작업용으로만 사용됩니다.
                      </p>
                    </div>
                  </div>
                  {/* <div
                    className={`${styles.flexStart} text-start sm:pt-4 space-y-6 rounded-xl border w-[50%] flex-col`}
                  >
                    <p className="px-4 text-sm text-white">
                      Using Model <br />
                      ChatGPT OpenSource
                    </p>
                    <div
                      className={`rounded-xl bg-[#343541] h-full px-4 ${styles.flexCenter} flex-row space-x-14`}
                    >
                      <p className="text-[14px] text-gray-300">
                        현재 얼리액세스 기간입니다. 사용자가 요청한 질문, 답변,
                        IP정보가 저장되며 모델 고도화 작업용으로만 사용됩니다.
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col">
                  <div className=" text-gray-200 pb-3 md:pl-2 px-5 md:px-0 md:text-[16px] text-[14px]">
                    Click Below Examples
                  </div>
                  {isSmallScreen ? (
                    <div className="flex flex-col space-y-4 pl-2">
                      <div
                        className={`${styles.flexCenter} bg-[#343541] text-center text-[#c5c5d2] sm:p-4 rounded-xl border border-[#555969] py-2 w-[90%] mx-auto cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick("평택대학교 위치가 어디야")
                        }
                      >
                        "평택대학교 위치가 어디야"
                      </div>
                      <div
                        className={`${styles.flexCenter} bg-[#343541]  text-center text-[#c5c5d2]  sm:p-4 rounded-xl border border-[#555969] py-2 w-[90%] mx-auto cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick("데이터정보학과에 대해 알려주세요")
                        }
                      >
                        "데이터정보학과에 대해 알려주세요"
                      </div>
                      <div
                        className={`${styles.flexCenter} bg-[#343541]  text-center text-[#c5c5d2] sm:p-4 rounded-xl border border-[#555969] py-2 w-[90%] mx-auto cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick(
                            "휴학신청은 어디서 하는지 알려주세요"
                          )
                        }
                      >
                        "휴학신청은 어디서 하는지 알려주세요"
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row space-x-8 pl-2">
                      <div
                        className={`${styles.flexCenter} bg-[#343541] text-[#c5c5d2] text-center sm:p-4 rounded-xl border border-[#555969] w-[50%] cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick("평택대학교 위치가 어디야")
                        }
                      >
                        "평택대학교 위치가 어디야"
                      </div>
                      <div
                        className={`${styles.flexCenter} bg-[#343541]  text-center text-[#c5c5d2]  sm:p-4 rounded-xl border border-[#555969] w-[50%] cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick("데이터정보학과에 대해 알려주세요")
                        }
                      >
                        "데이터정보학과에 대해 알려주세요"
                      </div>
                      <div
                        className={`${styles.flexCenter} bg-[#343541]  text-center text-[#c5c5d2] sm:p-4 rounded-xl border border-[#555969] w-[50%] cursor-pointer hover:bg-[#40414F]`}
                        onClick={() =>
                          handleExampleClick(
                            "휴학신청은 어디서 하는지 알려주세요"
                          )
                        }
                      >
                        "휴학신청은 어디서 하는지 알려주세요"
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col overflow-y-auto space-y-4 p-4 mb-4 lg:mx-[10%] xl:mx-[13%] xxl:mx-[16%]">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "bot" && (
                    <img
                      src="/icons/Daejung.png" // 이곳에 실제 봇 아이콘의 이미지 경로를 넣으세요.
                      alt="Bot"
                      className="w-6 h-6 mt-1 self-start mr-3 rounded-full" // 아이콘 크기와 여백을 조정하세요.
                    />
                  )}
                  <span
                    className={`inline-block w-full px-4  py-5 rounded-lg ${
                      message.type === "user"
                        ? "bg-[#343541] text-white px-5 py-3"
                        : "bg-[#444654] text-white"
                    }`}
                    style={{ wordBreak: "break-word" }}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
          <div className="flex-shrink-0 md:py-20 ">
            {isSmallScreen ? (
              <div className="fixed bottom-0 left-0 items-center  right-0 pb-safe bg-[#343541] shadow-lg p-4">
                <div className={`flex mx-[5%] mb-3 `}>
                  <textarea
                    ref={textAreaRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Anything"
                    rows={1}
                    className="flex-1 px-4 py-3 rounded-l-xl  bg-[#40414F] text-[#ffffff] focus:outline-none"
                    style={{
                      minHeight: "40px",
                      height: "40px",
                      maxHeight: "180px",
                      resize: "none",
                      lineHeight: "1.5", //
                      wordBreak: "break-word",
                    }}
                  />
                  <div
                    onClick={!isLoading ? sendMessage : null} // 로딩 중이 아닐 때만 sendMessage 함수를 호출
                    className={`${styles.flexCenter} rounded-r-xl bg-[#40414F] text-black px-4 py-2  `}
                  >
                    {!isLoading ? (
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ color: "#9ca3af" }}
                        className="w-[16px] h-[16px] cursor-pointer"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="fa-spin w-[16px] h-[16px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`flex px-[10%] rounded-xl mb-2 absolute bottom-7 w-full `}
              >
                <textarea
                  ref={textAreaRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Anything"
                  className="flex-1 px-4 py-3 rounded-l-xl bg-[#40414F] text-[#ffffff] focus:outline-none"
                  style={{
                    minHeight: "40px",
                    height: "40px",
                    maxHeight: "180px",
                    resize: "none",
                    lineHeight: "1.5", //
                    wordBreak: "break-word",
                  }}
                />
                <div
                  onClick={!isLoading ? sendMessage : null} // 로딩 중이 아닐 때만 sendMessage 함수를 호출
                  className={`${styles.flexCenter} rounded-r-xl bg-[#40414F] text-black px-4 py-2  `}
                >
                  {!isLoading ? (
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      style={{ color: "#9ca3af" }}
                      className="w-[16px] h-[16px] cursor-pointer"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spin w-[16px] h-[16px]"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
