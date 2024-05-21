import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Ministry = () => {
  return (
    <div className="w-full flex flex-col py-10 lg:py-20 px-6 lg:px-16 justify-center items-center gap-8 lg:gap-10 bg-[url('/home/graybg.svg')]">
      {Ministries.map((ministry, index) => (
        <Card
          key={index}
          className="lg:w-full w-[320px] flex lg:flex-row flex-col gap-6 py-4"
        >
          <div className="w-full lg:w-[440px] flex justify-center items-center">
            <div className="w-[220px] h-[220px] rounded-full bg-gray-300"></div>
          </div>
          <div className="w-full flex flex-col gap-4 px-4 justify-center">
            <h1 className="font-semibold text-xl lg:text-2xl text-primary-color">
              {ministry.title}
            </h1>
            <p className="text-secondary-black text-base lg:text-xl leading-5 lg:leading-8">
              {ministry.description}
            </p>
            <Link
              href={"/"}
              className="underline underline-offset-4 hover:text-btn-color text-base lg:text-xl leading-5 lg:leading-8"
            >
              Learn More
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Ministry;

const Ministries = [
  {
    title: "Prayer Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
  {
    title: "Choir Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
  {
    title: "Ushering Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
  {
    title: "Welfare Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
  {
    title: "YAYA Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
  {
    title: "Teenager Department",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos itaque laudantium impedit, possimus repudiandae nam.",
    link: "/",
  },
];
