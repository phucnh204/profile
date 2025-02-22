"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import logo from "@/assets/public/logo.png";
import arrow_icon from "@/assets/public/arrow-up-right.png";
import arrow_icon_white from "@/assets/public/up-arrow_4509888.png";
import moon_icon from "@/assets/public/moon_14092746.png";
import sun_icon from "@/assets/public/sun.png";
import menu_icon from "@/assets/public/menu-50.png";
import close_black from "@/assets/public/close.png";

interface NavBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  setActiveSection?: (section: string) => void;
}
const NavBar = ({
  isDarkMode,
  setIsDarkMode,
}: //  setActiveSection,
NavBarProps) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translate(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translate(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <nav
        className={`w-full max-w-screen fixed px-4 sm:px-6 md:px-8 xl:px-[8%]
   py-4 flex flex-wrap items-center justify-between z-50 overflow-hidden
   ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="#top" className="flex items-center justify-center ">
          {/* <Image
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full cursor-pointer mr-14"
          /> */}
          <h1
            className={`w-36 h-14 flex items-center justify-center 
              rounded-full cursor-pointer transition duration-300
              shadow-md text-xl font-semibold px-4
              ${
                isDarkMode
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
          >
            Phúc Code
          </h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8
    rounded-full px-12 py-3 transition duration-300 
    ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}
        >
          <li>
            <a
              href="#top"
              className="relative group text-gray-800 dark:text-white hover:text-blue-500 transition duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative group text-gray-800 dark:text-white hover:text-blue-500 transition duration-300"
            >
              About me
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          {/* <li>
            <a
              href="#services"
              className="relative group text-gray-800 dark:text-white hover:text-blue-500 transition duration-300"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li> */}
          <li>
            <a
              href="#myProject"
              className="relative group text-gray-800 dark:text-white hover:text-blue-500 transition duration-300"
            >
              My project
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative group text-gray-800 dark:text-white hover:text-blue-500 transition duration-300"
            >
              Contact me
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <Image
              src={isDarkMode ? sun_icon : moon_icon}
              alt="Theme Toggle"
              className="w-6 h-6 transition-transform duration-300 transform scale-100 hover:scale-110"
            />
          </button>

          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            {" "}
            Contact{" "}
            <Image
              src={isDarkMode ? arrow_icon_white : arrow_icon}
              alt="arrow icon up"
              className="w-5 h-5"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={menu_icon} alt="" className="w-10" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed
    top-0 bottom-0 -right-64 w-64 z-50 h-screen 
    bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-l-2xl
    transition-transform duration-500 ease-in-out`}
        >
          {/* Nút đóng menu */}
          <button
            className="absolute right-6 top-6 p-2 rounded-full bg-gray-300 dark:bg-gray-700 shadow-md 
      hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
            onClick={closeMenu}
          >
            <Image
              alt="Close"
              src={close_black}
              className="cursor-pointer w-6"
            />
          </button>

          {/* Danh sách menu */}
          {[
            { label: "Home", link: "#top" },
            { label: "About me", link: "#about" },
            { label: "Services", link: "#services" },
            { label: "My project", link: "#myProject" },
            { label: "Contact me", link: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={closeMenu}
                className="block text-lg font-semibold text-gray-800 dark:text-gray-900 py-3 px-4 rounded-lg 
          transition duration-300 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-500 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
