import Image from "next/image";
import React from "react";
import img_profile from "@/assets/public/CVImage.jpg";
import icon_profile from "@/assets/public/hello-icon.png";
import icon_arrow_white from "@/assets/public/arrow-white.png";
import icon_download from "@/assets/public/cloud-download.png";

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const data = [
    {
      profile: {
        name: "Nguyễn Hữu Phúc",
      },
    },
  ];

  return (
    <div
      className={`w-11/12 max-w-3xl text-center mx-auto mt-28 flex flex-col 
                  items-center justify-center gap-4 transition duration-300
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-900"
                  }`}
    >
      {/* Profile Image */}
      <div className="relative">
        <Image
          src={img_profile}
          alt="Image profile"
          className="rounded-full w-32 h-32 object-cover shadow-lg border-4 
                     ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}"
        />
        <Image
          src={icon_profile}
          alt="Icon hello"
          className="absolute -top-2 -right-2 w-8 animate-bounce"
        />
      </div>

      {/* Greeting */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I&apos;m <strong>{data[0].profile?.name}</strong>
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-[40px] font-bold">
        Frontend Web Developer Based in Viet Nam
      </h1>

      {/* Description */}
      <p
        className={`max-w-lg mx-auto ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Previously, I studied at FPT Polytechnic College. I am a frontend
        developer from Vietnam with three months of internship experience at ISC
        - Alta Software in Hau Giang. My passion for creating intuitive and
        visually appealing user interfaces drives my dedication to continuous
        learning and improvement.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className={`px-10 py-3 border rounded-full flex items-center gap-2 font-semibold transition duration-300
                     ${
                       isDarkMode
                         ? "border-gray-500 bg-gray-800 text-white hover:bg-gray-700"
                         : "border-gray-800 bg-black text-white hover:bg-gray-900"
                     }`}
        >
          Contact Me{" "}
          <Image src={icon_arrow_white} alt="arrow" className="w-4" />
        </a>

        {/* Resume Download Button */}
        <a
          href="/update-resume-CV.pdf"
          download
          className={`px-10 py-3 border rounded-full flex items-center gap-2 font-semibold transition duration-300
                     ${
                       isDarkMode
                         ? "border-gray-500 text-gray-300 hover:bg-gray-700"
                         : "border-gray-800 text-gray-900 hover:bg-gray-100"
                     }`}
        >
          My Resume <Image src={icon_download} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
