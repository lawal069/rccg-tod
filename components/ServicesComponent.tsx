import { Services } from "@/data/homeData";
import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const ServicesComponent = () => {
  return (
    <section className="w-full bg-light-gray flex flex-col lg:flex-row lg:justify-center items-center gap-10 px-6 lg:px-20 py-20 lg:py-40">
      <div className="flex flex-col space-y-6 lg:space-y-14 justify-center items-center">
        <h3 className="font-bold uppercase text-2xl lg:text-4xl border-l-4 px-2 border-primary-color">
          services time
        </h3>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {Services.map((service, index) => (
            <Card
              key={index}
              className="py-10 lg:py-14 w-[250px] lg:w-[300px] border-none flex flex-col justify-center items-center duration-500 ease-in-out hover:scale-105"
            >
              <div className="w-[60px] lg:w-[90px] h-[60px] lg:h-[90px] rounded-full bg-white relative">
                <Image
                  src={service.logo}
                  alt={service.service}
                  fill
                  className="absolute object-cover w-auto"
                />
              </div>
              <div className="pt-6 flex flex-col gap-y-1 lg:gap-y-2">
                <h3 className="text-xl lg:text-2xl text-primary-color font-bold uppercase text-center">
                  {service.service}
                </h3>
                <h3 className="text-base lg:text-xl text-custom-black font-semibold uppercase text-center">
                  {service.day}
                </h3>
                <h3 className="text-base lg:text-xl text-custom-black font-medium uppercase text-center">
                  {service.time}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
