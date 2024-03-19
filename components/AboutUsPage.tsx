import React from "react";
import ServicesComponent from "./ServicesComponent";
import VisionMissionComp from "./VisionMissionComp";

const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="bg-[url('/home/graybg.svg')] flex justify-center items-center flex-col w-full py-20 lg:py-40 px-6 lg:px-12 gap-8">
        <h1 className="font-bold text-3xl lg:text-7xl uppercase text-primary-color">
          Welcome
        </h1>
        <p className="w-full lg:w-[700px] text-base lg:text-2xl text-center leading-7 lg:leading-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          voluptas. Consectetur quod repellat consequatur impedit possimus
          doloribus deleniti, dolorum inventore quisquam quae omnis ut sequi
          odit est rem eaque ea! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Error omnis laboriosam minima soluta quasi ipsam
          molestias officia numquam, dicta inventore quia culpa earum ad
          architecto iure dignissimos cumque quos animi!
        </p>
      </section>
      <section className=" pb-20 flex justify-center items-center flex-col w-full gap-20 bg-white">
        <div className="py-14 lg:py-20 bg-primary-color w-full flex justify-center items-center">
          <h1 className="font-bold text-3xl lg:text-5xl uppercase text-white">
            leadership
          </h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-6 lg:px-12">
          <div className="w-[300px] lg:w-[400px] h-[320px] lg:h-[440px] bg-gray-800 rounded-full"></div>
          <div className="w-full lg:w-[600px] text-custom-black ">
            <h1 className="font-bold text-3xl lg:text-5xl">Olumide Akinyemi</h1>
            <h3 className="font-semibold text-base lg:text-2xl">Area Pastor</h3>
            <p className="py-6 text-secondary-black text-xs lg:text-xl text-center lg:text-left leading-5 lg:leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <ServicesComponent />
        <VisionMissionComp />
      </section>
    </div>
  );
};

export default AboutUsPage;
