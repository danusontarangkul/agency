import React from "react";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: "/linkedin.svg",
      link: "https://www.linkedin.com/in/anusontarangkul/",
    },
    {
      id: 2,
      img: "/Instagram.svg",
      link: "https://www.instagram.com/david.anuson/",
    },
    {
      id: 3,
      img: "/youtube.svg",
      link: "https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw",
    },
  ];
  return (
    <footer className="!px-0 !py-8  md:flex bg-custom-bg text-gray-50">
      <div className="flex justify-center items-center gap-10 ">
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()} David Anuson. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center md:gap-3 gap-6 mt-3">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-gradient-to-r from-customColor3 to-customColor1  rounded-lg"
          >
            <a href={info.link} target="_blank">
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
