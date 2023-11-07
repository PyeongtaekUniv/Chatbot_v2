"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sidebar, SidebarMobile, Navbar, Chatbot } from "../components";
import styles from "../styles";

const Page = () => {
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

  const renderDesktop = () => {
    return (
      <>
        <div className="flex flex-row h-full">
          <Sidebar />
          <div className="w-full min-h-screen">
            <Chatbot />
          </div>
        </div>
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <div className="flex flex-row h-full">
          <SidebarMobile />
          <div className="w-full min-h-screen">
            <Chatbot />
          </div>
        </div>
      </>
    );
  };
  return <>{isSmallScreen ? renderMobile() : renderDesktop()}</>;
};

export default Page;
