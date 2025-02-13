"use client";
import { myProject } from "@/apis/myProject";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Props {
  isDarkMode: boolean;
}

const MyProject = ({ isDarkMode }: Props) => {
  return (
    <div
      id="myProject"
      className={`w-full px-[12%] py-10 scroll-mt-20 transition duration-300
                 ${
                   isDarkMode
                     ? "bg-gray-900 text-white"
                     : "bg-white text-gray-900"
                 }`}
    >
      <h4
        className={`text-center mb-2 text-lg font-semibold transition duration-300
                      ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
      >
        My Projects
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-bold">
        My Latest Work
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 transition duration-300
                    ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in frontend development.
      </p>

      {myProject.length <= 4 ? (
        /* Hiển thị dạng Grid nếu <= 4 sản phẩm */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {myProject.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-md transition-all duration-500
                          hover:shadow-xl ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                          }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500
                            bg-opacity-40 group-hover:bg-opacity-80
                            ${isDarkMode ? "bg-gray-900" : "bg-black"}`}
              >
                <div className="text-center text-white">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base opacity-80">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm mt-2 text-gray-300">
                    ⏳ {project.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Dùng Slider nếu nhiều hơn 4 sản phẩm */
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {myProject.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative rounded-xl overflow-hidden group shadow-md transition-all duration-500
                            hover:shadow-xl ${
                              isDarkMode ? "bg-gray-800" : "bg-white"
                            }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500
                              bg-opacity-40 group-hover:bg-opacity-80
                              ${isDarkMode ? "bg-gray-900" : "bg-black"}`}
                >
                  <div className="text-center text-white">
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base opacity-80">
                      {project.description}
                    </p>
                    <p className="text-xs sm:text-sm mt-2 text-gray-300">
                      ⏳ {project.time}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MyProject;
