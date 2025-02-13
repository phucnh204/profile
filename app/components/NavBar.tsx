"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import logo from "@/assets/public/logo.png";
import arrow_icon from "@/assets/public/arrow-up-right.png";
import moon_icon from "@/assets/public/moon-icon-8.png";
import menu_icon from "@/assets/public/menu-icon.png";
import close_black from "@/assets/public/close-black.png";
const NavBar = () => {
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
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%]
         py-4 flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}
         `}
      >
        <a href="#top" className="flex items-center justify-center ">
          {/* <Image
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full cursor-pointer mr-14"
          /> */}
          <h1
            className="font-[family-name:var(--font-geist-mono)]
                  w-22 h-12 rounded-full cursor-pointer pt-3
           bg-lightHover shadow font-semibold p-2 text-xl"
          >
            Phúc Code
          </h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8
           rounded-full px-12 py-3 ${
             isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={moon_icon} alt="" className="w-6" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            {" "}
            Contact{" "}
            <Image src={arrow_icon} alt="arrow icon up" className="w-5 h-5" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={menu_icon} alt="" className="w-10" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed
                top-0 bottom-0 -right-64 w-64 z-50 h-screen bg-rose-50 transition duration-500`}
        >
          <button className="absolute right-6 top-6" onClick={closeMenu}>
            <Image alt="" src={close_black} className="cursor-pointer w-6" />
          </button>
          {/* isMenuOpen ? "right-0" : "-right-64" */}
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
