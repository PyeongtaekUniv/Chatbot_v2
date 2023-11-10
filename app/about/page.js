"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { Navbar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint value as needed
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Call the handleResize function initially
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center flex-col h-[50vh] bg-black">
        <div>
          <div
            className={`font-[Pretendard-medium] text-[#ffffff] bg-black text-[40px] sm:text-[60px] xl:text-[80px] md:text-[75px] xxxxl:text-[100px]`}
          >
            <p>About us</p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} flex flex-row md:space-x-[8%] mx-[3%] space-x-[5%] px-auto mt-[10%]`}
      >
        <div
          className={`${styles.flexCenter} flex flex-col bg-[#343541] text-white py-4  pl-1`}
        >
          <h1 className="md:text-[16px] text-[12px]">PM, Modeling</h1>
          <div className={`${styles.flexCenter}`}>
            <img src="/about/bsj.png" className="w-[70%]  " />
          </div>
          <div className="flex flex-col space-y-2">
            <a href="https://www.instagram.com/bbaekk.98/" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">BBAEKK.98</h1>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/seungjune-baek-488a63270/"
              target="_blank"
            >
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1
                  className={`pl-2 md:text-[15px] text-[12px] ${styles.flexCenter}`}
                >
                  Seungjune Baek
                </h1>
              </div>
            </a>
            <a href="https://github.com/nabsj" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">nabsj</h1>
              </div>
            </a>
          </div>
        </div>

        <div
          className={` ${styles.flexCenter}  flex-col bg-[#343541] text-white py-4  pl-1`}
        >
          <p className="md:text-[16px] text-[12px]">
            DataCollect, Preprocessing
          </p>

          <div className={`${styles.flexCenter} flex`}>
            <img src="/about/kjw.png" className="w-[70%]  " />
          </div>
          <div className="flex flex-col space-y-2">
            <a href="https://instagram.com/jju_nani" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">jju_nani</h1>
              </div>
            </a>
            <div className={`${styles.flexStart} flex row cursor-pointer`}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "white" }}
                className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
              />
              <h1
                className={`pl-2 md:text-[15px] text-[12px] ${styles.flexCenter}`}
              >
                U-sia
              </h1>
            </div>
            <a href="https://github.com/U-Sia" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">U-sia</h1>
              </div>
            </a>
          </div>
        </div>

        <div
          className={`${styles.flexCenter}  flex-col bg-[#343541] text-white py-4  pl-1`}
        >
          <p className="md:text-[15px] text-[12px]">
            Dev, Design(UI,UX), Frontend
          </p>
          <div className={`${styles.flexCenter}`}>
            <img src="/about/bkh.png" className="w-[70%] " />
          </div>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://www.instagram.com/baekkyuhyun1/" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">
                  baekkyuhyun1
                </h1>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/shawn-baek-28778927b/"
              target="_blank"
            >
              <div className={`${styles.flexStart} flex row cursor-pointer `}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px]  "
                />
                <h1
                  className={`pl-2 md:text-[15px] text-[12px] ${styles.flexCenter}`}
                >
                  Shawn Baek
                </h1>
              </div>
            </a>
            <a href="https://github.com/Sly001029" target="_blank">
              <div className={`${styles.flexStart} flex row cursor-pointer`}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "white" }}
                  className="md:w-[25px] w-[19px] md:h-[25px] h-[20px] "
                />
                <h1 className="pl-2 md:text-[15px] text-[12px]">Sly001029</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
