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
    <footer className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()} David Anuson. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center md:gap-3 gap-6 mt-2">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
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
