import Image from "next/image";
import React from "react";

const InfoButton = () => {
  const icon_Zalo: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png";
  const icon_Facebook: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnDKAcwAqjwk8Yspu3n73kcXZEbZMBLTU0g&s";
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0989861548"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Image src={icon_Zalo} alt="Zalo" width={32} height={32} />
      </a>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/profile.php?id=100045759542134"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Image src={icon_Facebook} alt="Facebook" width={32} height={32} />
      </a>

      {/* SDT */}
      <a
        href="tel:0989861548"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="call"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default InfoButton;
