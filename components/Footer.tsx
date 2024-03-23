import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mx-auto flex flex-col justify-center items-center gap-4 lg:gap-6 bg-white text-black px-4 lg:px-20 py-6 lg:py-10">
      <div className="w-full flex justify-center items-center gap-4">
        <Link href={"/"} className="relative w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]">
          <Image src={"/logo.svg"} fill alt="rccg" className="absolute w-auto object-cover" />
        </Link>
        <div className="flex flex-col uppercase font-bold">
          <h1 className="text-lg lg:text-2xl">RCCG Tabernacle of David</h1>
          <p className="text-sm font-medium italic">
            The place of His presence
          </p>
        </div>
      </div>
      <div className="flex gap-2 lg:gap-[14px]">
        {footerImages.map((image, index) => (
          <Link
            href={image.socialUrl}
            key={index}
            className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] relative hover:scale-105"
          >
            <Image
              fill
              alt={""}
              src={image.src}
              className="absolute object-cover w-auto"
            />
          </Link>
        ))}
      </div>
      <div className="">
        © 2024 RCCG Tabernacle of David.
      </div>
    </footer>
  );
};

const footerLinks = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Services",
    link: "",
  },
  {
    name: "Work",
    link: "",
  },
  {
    name: "Process",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Careers",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

export const footerImages = [
  {
    src: "/facebook.svg",
    alt: "facebook",
    socialUrl: "facebook.com/tabofdav",
  },
  {
    src: "/x.svg",
    alt: "x",
    socialUrl: "twitter.com/tabofdav",
  },
  {
    src: "/instagram.svg",
    alt: "instagram",
    socialUrl: "instagram.com/tabofdav",
  },
  {
    src: "/youtube.svg",
    alt: "youtube",
    socialUrl: "https://www.youtube.com/@tabofdav",
  },
];

export default Footer;
