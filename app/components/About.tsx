import Image from "next/image";
import React from "react";
import user_image from "@/assets/public/img-user.png";
import { infoList } from "../../apis/infoLanguages";
import { toolsData } from "@/apis/toolsData";

export interface InfoItem {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
}

export interface Props {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: Props) => {
  return (
    <div
      id="about"
      className={`w-full px-6 sm:px-[12%] py-10 scroll-mt-20 transition duration-300
                 ${
                   isDarkMode
                     ? "bg-gray-900 text-white"
                     : "bg-white text-gray-900"
                 }`}
    >
      {/* Title */}
      <h4 className="text-center mb-2 text-base sm:text-lg">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-bold">About me</h2>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-16 my-10">
        {/* User Image */}
        <div className="flex justify-end items-end lg:w-[250px] md:items-center">
          <Image
            src={user_image}
            alt="user"
            className={`w-40 lg:-mr-6 lg:mt-6 xl:-mt-1 xl:-mr-8 xl:h-[250px] 
                        sm:w-48 md:w-64 md:h-[300px] shadow-lg rounded-3xl object-cover
                        ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className={`mb-4 mx-auto lg:mx-0 text-sm sm:text-base transition duration-300 xl:ml-10 max-w-[700px]
                        ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Tôi là một lập trình viên Frontend mới tốt nghiệp, luôn khao khát
            học hỏi và phát triển trong lĩnh vực công nghệ. Tôi mong muốn được
            tham gia vào các dự án thực tế nhằm rèn luyện kỹ năng chuyên môn và
            đóng góp giá trị thiết thực cho sự phát triển của doanh nghiệp.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-4 max-w-2xl xl:gap-16 xl:ml-10 mx-auto lg:mx-0">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className={`border rounded-xl p-4 sm:p-6 cursor-pointer transition duration-500
                            hover:-translate-y-1 hover:shadow-md
                            ${
                              isDarkMode
                                ? "border-gray-600 hover:bg-gray-800"
                                : "border-gray-300 hover:bg-lightHover"
                            }`}
                key={index}
              >
                <div className="flex items-center justify-center text-center gap-3">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 sm:w-12 transition duration-300"
                  />

                  <h3
                    className={`font-semibold transition duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className={`text-xs sm:text-sm mt-2 transition duration-300
                               ${
                                 isDarkMode ? "text-gray-400" : "text-gray-600"
                               }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tools Section */}
      <h4
        className={`mt-2 text-center lg:text-left transition duration-300
                      ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        Tools I use
      </h4>
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {toolsData.map((tool, index) => (
          <li
            className={`flex items-center justify-center w-10 sm:w-12 aspect-square 
                        border rounded-lg cursor-pointer transition duration-500 hover:-translate-y-1
                        ${
                          isDarkMode
                            ? "border-gray-600 hover:bg-gray-800"
                            : "border-gray-300 hover:bg-lightHover"
                        }`}
            key={index}
          >
            <Image src={tool} alt="tool" className="w-5 sm:w-7" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
