import React from "react";
import { Card } from "./ui/card";

const VisionMissionComp = () => {
  return (
    <div className="bg-[url('/home/grass.svg')] w-full flex flex-col lg:flex-row justify-center gap-6 items-center px-6 lg:px-12 py-20 lg:py-40 ">
      {Data.map((data, index) => (
        <Card key={index} className="w-full lg:w-[450px] lg:h-[400px] p-8 lg:p-12 duration-500 ease-in-out lg:hover:scale-105 bg-light-gray">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold uppercase text-xl lg:text-3xl text-center ">
              {data.title}
            </h3>
            <ul className="space-y-4">
              {data.content.map((content, index) => (
                <li key={index} className="font-bold text-base lg:text-lg list-disc">
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default VisionMissionComp;

const Data = [
  {
    title: "Vision",
    content: ["Vision1", "Vision2", "Vision3", "Vision4", "Vision5"],
  },
  {
    title: "Mission",
    content: ["Mission1", "Mission2", "Mission3", "Mission4", "Mission5"],
  },
];
