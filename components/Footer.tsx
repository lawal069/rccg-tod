import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" h-auto w-full flex lg:flex-col justify-between gap-10 items-start bg-black text-white px-4 lg:px-20 py-6 lg:py-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-0 lg:mb-16 w-full ">
        <div>
          <Image
            src={"/whitelogo.svg"}
            width={180}
            height={57}
            alt="Leoburnett"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px]">
          {footerLinks.map((link, index) => (
            <li key={index} className="list-none">
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </div>
        <div className="flex gap-2 lg:gap-[14px] ">
          {footerImages.map((image, index) => (
            <Image
              key={index}
              alt={""}
              width={image.width}
              height={image.height}
              src={image.src}
              className="bg-black"
            />
          ))}
        </div>
      </div>
      <hr className=" hidden lg:block lg:border lg:border-white w-full" />
      <div className="flex flex-col lg:flex-row lg:justify-between mt-[50px] items-center w-full">
        <div className="flex gap-[30px] flex-col lg:flex-row ">
          <Link href={""} className="flex gap-2 items-center">
            <Image src={"/mail.svg"} width={20} height={20} alt="facebook" />
            <p>hello@Leoburnett.com</p>
          </Link>
          <Link href={""} className="flex gap-2 items-center">
            <Image src={"/call.svg"} width={20} height={20} alt="facebook" />
            <p>+91 91813 23 2309</p>
          </Link>
          <Link href={""} className="flex gap-2 items-center">
            <Image src={"/location.svg"} width={20} height={20} alt="facebook" />
            <p>Somewhere in the World</p>
          </Link>
        </div>
        <div className="">© 2024 Leoburnett. All rights reserved.</div>
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

const footerImages = [
  {
    src: "/footerImages/facebook.svg",
    alt: "facebook",
    width: 44,
    height: 44,
  },
  {
    src: "/footerImages/twitter.svg",
    alt: "twitter",
    width: 44,
    height: 44,
  },
  {
    src: "/footerImages/linkedln.svg",
    alt: "linkedln",
    width: 44,
    height: 44,
  },
];

export default Footer;