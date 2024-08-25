"use client";
import TermsModal from "../components/modals/TermsModal";
import PrivacyModal from "../components/modals/PrivacyModal";
import CreditsModal from "../components/modals/CreditsModal";
import useModal from "@/hooks/useModal";

const Footer = () => {
  const privacyModal = useModal();
  const termsModal = useModal();
  const creditsModal = useModal();

  const socialMedia = [
    {
      id: 1,
      img: "/linkedin.svg",
      link: "https://www.linkedin.com/in/anusontarangkul/",
    },
    {
      id: 2,
      img: "/instagram.svg",
      link: "https://www.instagram.com/david.anuson/",
    },
    {
      id: 3,
      img: "/youtube.svg",
      link: "https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw",
    },
  ];
  return (
    <footer className="!px-0 !py-8  md:flex md:justify-around bg-custom-bg text-gray-50">
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
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className="flex items-center space-x-2 mt-1">
          <button
            onClick={termsModal.toggleModal}
            className="underline hover:text-lightGray"
          >
            Terms of Service
          </button>
          <span className="text-customBlack">|</span>
          <button
            onClick={privacyModal.toggleModal}
            className="underline hover:text-lightGray"
          >
            Privacy Policy
          </button>
          <span className="text-customBlack">|</span>
          <button
            onClick={creditsModal.toggleModal}
            className="underline hover:text-lightGray"
          >
            Credits
          </button>
        </div>
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()} David Anuson. All rights reserved.
        </p>
      </div>
      {privacyModal.isOpen && (
        <PrivacyModal handleClose={privacyModal.closeModal} />
      )}
      {termsModal.isOpen && <TermsModal handleClose={termsModal.closeModal} />}
      {creditsModal.isOpen && (
        <CreditsModal handleClose={creditsModal.closeModal} />
      )}
    </footer>
  );
};

export default Footer;
