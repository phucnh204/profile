import Image from "next/image";
import React from "react";
import user_image from "@/assets/public/img-user.png";
import { infoList } from "../../assets/infoLanguages";
import { toolsData } from "@/assets/toolsData";

export interface InfoItem {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
}

export interface Props {
  infoList: InfoItem[];
}

const About = () => {
  return (
    <div id="about" className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-base sm:text-lg">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-bold">About me</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-16 my-10">
        {/* User Image */}
        <div className=" flex justify-end items-end lg:w-[250px]  md:items-center">
          <Image
            src={user_image}
            alt="user"
            className="w-40 lg:-mr-6 lg:mt-6 xl:-mt-1 xl:-mr-8 xl:h-[250px] sm:w-48 md:w-64 md:h-[300px] shadow-sm    rounded-3xl object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4  mx-auto lg:mx-0 text-gray-700 text-sm sm:text-base">
            I am a fresh graduate Frontend Developer with passion for learning
            and technology. I am looking forward to participating in real
            projects to further improve my skills and contribute to the
            company’s growth.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3    gap-4 md:gap-4 max-w-2xl xl:gap-16 xl:ml-10 mx-auto lg:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border border-gray-300 rounded-xl p-4 sm:p-6 cursor-pointer
          hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-md"
                key={index}
              >
                <div className="flex items-center justify-center text-center  gap-3">
                  <Image src={icon} alt={title} className="w-7 sm:w-12" />
                  <h3 className="font-semibold text-gray-700">{title}</h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-2">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Tools Section */}
      <h4 className="mt-2 text-gray-700 text-center  lg:text-left">
        Tools I use
      </h4>
      <ul className="flex flex-wrap justify-center  gap-3 sm:gap-4">
        {toolsData.map((tool, index) => (
          <li
            className="flex items-center justify-center w-10 sm:w-12 
          aspect-square border border-gray-300 rounded-lg cursor-pointer
          hover:-translate-y-1 duration-500"
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
