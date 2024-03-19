"use client";

import { PastorData } from "@/data/pastorData";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: Partial<PastorData>;
}

const PastorCard = ({ data }: Props) => {
  return (
    <div className="flex lg:h-[400px] w-[250px] lg:w-32 transition-all duration-500 lg:hover:flex-grow rounded-xl hover:scale-105">
      <Link
        href={`/pastor/${data.pastorId}`}
        className="h-[300px] lg:h-full bg-cover w-full bg-center rounded-xl"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="h-full flex flex-col justify-end">
          <div className="bg-light-gray bg-opacity-75 flex flex-col px-2 py-4 lg:py-6">
            <h1 className="font-semibold text-2xl">{data.pastorName}</h1>
            <p className="font-medium">{data.designation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PastorCard;
