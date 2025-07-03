import Image from "next/image";
import React from "react";
import img_profile from "@/assets/public/CVImage.jpg";
import icon_profile from "@/assets/public/hello-icon.png";
import icon_arrow_white from "@/assets/public/arrow-white.png";
// import icon_download from "@/assets/public/cloud-download.png";

const HomePage = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const data = [
    {
      profile: {
        name: "Nguyễn Hữu Phúc",
      },
    },
  ];

  return (
    <div
      id="home"
      className={`w-11/12 max-w-3xl text-center mx-auto mt-8 flex flex-col 
                  items-center justify-center gap-4 transition duration-300
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-900"
                  }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-80 bg-cover bg-center shadow-xl"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/07/26/36/71/360_F_726367125_fHjq3DcCay0zswhLlW5eYkhz7qzPPHGt.jpg')",
          clipPath: "ellipse(100% 50% at center top)",
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
      </div>
      {/* Profile Image */}
      <div className="relative flex flex-col items-center pb-4">
        {/* Ảnh Profile */}
        <div className="relative mt-16">
          <Image
            src={img_profile}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover shadow-xl border-4 border-white dark:border-gray-800"
          />
          <Image
            src={icon_profile}
            alt="Hello Icon"
            className="absolute -top-2 -right-2 w-8 animate-bounce"
          />
        </div>
      </div>

      {/* Greeting */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I&apos;m <strong>{data[0].profile?.name}</strong>
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-[40px] font-bold">
        Frontend Web Developer
      </h1>

      {/* Description */}
      <p
        className={`max-w-lg mx-auto ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Trước đây, tôi từng theo học tại{" "}
        <strong>Cao đẳng FPT Polytechnic</strong>. Tốt nghiệp loại xuất sắc
        nghành <strong>Phát triển phần mềm</strong> với GPA là{" "}
        <strong>3.64</strong>. Niềm đam mê của tôi là tạo ra các giao diện người
        dùng trực quan và thu hút, điều này thúc đẩy tôi không ngừng học hỏi và
        cải thiện kỹ năng mỗi ngày.
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
        {/* <a
          disabled={false}
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
        </a> */}
      </div>
     
    </div>
  );
};

export default HomePage;
