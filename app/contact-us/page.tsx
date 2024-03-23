import ContactPage from "@/components/ContactPage";
import { footerImages } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xxl mx-auto w-full">
      <div className="w-full flex flex-col pt-20 justify-center items-center bg-light-gray">
        <div className="bg-[url('/home/graybg.svg')] w-full flex justify-center items-center flex-col py-10 lg:py-28 gap-4 lg:gap-8 px-6">
          <h1 className="font-bold text-3xl lg:text-7xl uppercase text-primary-color">
            contact us
          </h1>
          <p className="w-full lg:w-[600px] text-base lg:text-2xl text-center text-secondary-black font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, temporibus. Dolore, nemo dolores! Corporis dolor
            sapiente.
          </p>
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
        </div>
        <div className="flex flex-col text-custom-black justify-center items-center w-full lg:w-[800px] gap-4 py-10 lg:py-20 px-6 lg:px-12 my-10 lg:my-20 rounded-2xl bg-white">
          <h3 className="font-bold uppercase text-xl lg:text-4xl ">
            We'd love to hear from you
          </h3>
          <div className="w-full">
            <ContactPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
