import { Pastor } from "@/data/pastorData";
import React from "react";
import PastorCard from "./PastorCard";

const PastorWrapper = () => {
  return (
    <div className="w-full px-6 lg:px-12 py-20 lg:py-40">
      <div className="flex flex-col text-custom-black justify-center items-center w-full gap-10">
        <h3 className="font-bold uppercase text-2xl lg:text-4xl border-l-4 px-2 border-primary-color">
          our pastors
        </h3>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 px-20 py-10 lg:py-20">
        {Pastor.map((pastor) => (
          <PastorCard key={pastor.pastorId} data={pastor} />
        ))}
      </div>
    </div>
  );
};

export default PastorWrapper;
