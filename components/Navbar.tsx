"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

// import CloseIcon from "./CloseIcon";
// import OpenIcon from "./OpenIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between max-w-screen-xxl lg:px-16 px-6 py-4 w-full mx-auto bg-white lg:relative">
        {/* logo */}
        <div className="lg:w-fit w-full z-30 flex items-center justify-between lg:border-none lg:pb-0">
          <Link
            href={"/"}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              alt="alt Image"
              width={50}
              height={50}
              src={"/logo.svg"}
              className=""
            />
          </Link>

          {/* hamburger menu */}
          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? (
              <Image src={"/close.svg"} alt={"close"} width={36} height={36} />
            ) : (
              <Image src={"/open.svg"} alt={"open"} width={36} height={36} />
            )}
          </div>
        </div>

        <div className="lg:flex hidden items-center justify-between gap-[66px]">
          <ul className="flex gap-[48px]">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url} className="text-black">
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <Button className="bg-btn-color hover:bg-btn-color">Give Online</Button>
        </div>

        {/* mobile-menu */}
        <ul
          className={`lg:hidden absolute w-full h-full bottom-0 bg-white z-10 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="space-y-8 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-black block text-lg"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-btn-color hover:bg-btn-color">Give Online</Button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

const navLinks = [
  {
    name: "About Us",
    url: "about-us",
  },
  {
    name: "Ministries",
    url: "ministries",
  },
  {
    name: "Events",
    url: "events",
  },
  {
    name: "Media",
    url: "media",
  },
  {
    name: "Contact",
    url: "contact-us",
  },
];

export default Navbar;
