import Image from "next/image";
import React from "react";
import img_profile from "@/assets/public/CVImage.jpg";
import icon_profile from "@/assets/public/hello-icon.png";
import icon_arrow_white from "@/assets/public/arrow-white.png";
import icon_download from "@/assets/public/cloud-download.png";
const Header = () => {
  const data = [
    {
      profile: {
        name: " Nguyễn Hữu Phúc",
      },
    },
  ];

  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto
       flex flex-col items-center justify-center gap-4
       h-screen
    "
    >
      <div>
        <Image
          src={img_profile}
          alt="Image profile"
          className="rounded-full w-32 h-32 object-cover "
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I&lsquo;m <strong>{data[0].profile?.name}</strong>
        <Image src={icon_profile} alt="Icon hello" className=" w-6" />
      </h3>
      <h1 className="text-3xl sm:5xl lg:text-[40px]">
        frontend web developer based in Viet Nam
      </h1>
      <p>
        Previously, I studied at FPT Polytechnic College. I am a frontend
        developer from Vietnam with three months of internship experience at ISC
        - Alta Software in Hau Giang. My passion for creating intuitive and
        visually appealing user interfaces drives my dedication to continuous
        learning and improvement.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          contact me <Image src={icon_arrow_white} alt="" className=" w-4" />
        </a>

        <a
          href="/update-resume-CV.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <Image src={icon_download} alt="" className=" w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
