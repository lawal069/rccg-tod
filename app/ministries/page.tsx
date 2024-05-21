import Ministry from "@/components/Ministry";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xxl mx-auto w-full">
      <div className="w-full flex flex-col pt-20 justify-center items-center">
        <div className="py-14 lg:py-20 bg-primary-color w-full flex justify-center items-center">
          <h1 className="font-bold text-3xl lg:text-5xl uppercase text-white">
            church ministries
          </h1>
        </div>

        <Ministry />
      </div>
    </div>
  );
};

export default page;
