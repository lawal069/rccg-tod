"use client";

import Link from "next/link";
import React, { useState } from "react";

const PastorCard = () => {
  return (
    <section className=" w-full lg:px-32">
      <div className="flex flex-col lg:flex-row gap-3 justify-center lg:h-[400px] w-full items-center">
        {Pastor.map((pastor, index) => (
          <Link
            href={pastor.pastorLink}
            key={index}
            className="h-[300px] lg:h-full w-[250px] lg:w-32 bg-cover bg-center transition-all duration-500 lg:hover:flex-grow rounded-xl hover:scale-105"
            style={{ backgroundImage: `url(${pastor.img})`, }}
          >
            <div className="h-full flex flex-col justify-end">
              <div className="bg-light-gray bg-opacity-75 flex flex-col px-2 py-4 lg:py-6">
                <h1 className="font-semibold text-2xl">{pastor.pastorName}</h1>
                <p className="font-medium">{pastor.designation}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PastorCard;

const Pastor = [
    { 
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Pastor",
        pastorLink: "",
    },
    { 
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Pastor",
        pastorLink: "", 
    },
    { 
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Pastor",
        pastorLink: "", 
    },
    { 
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Pastor",
        pastorLink: "", 
    },
    { 
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Pastor",
        pastorLink: "", 
    },
  ];
