"use client";

import { Pastor } from "@/data/pastorData";

interface pageProps {
  params: {
    pastorId: string;
  };
}

const PastorDetails = ({ params }: pageProps) => {
  const selectedPastor = Pastor.find(
    (pastor) => pastor.pastorId === params.pastorId
  );
  return (
    <div className="w-full flex justify-center items-center py-44 px-6 lg:px-12">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <div className="w-[300px] lg:w-[400px] h-[320px] lg:h-[440px] bg-gray-800 rounded-full"></div>
        <div className="w-full lg:w-3/5">
          <div className="text-custom-black">
            <h1 className="font-bold text-3xl lg:text-5xl">
              {selectedPastor?.pastorName}
            </h1>
            <h3 className="font-semibold text-base lg:text-2xl">
              {selectedPastor?.designation}
            </h3>
            <p className="py-6 text-secondary-black text-xs lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.<br/><br/>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, corporis? Est dicta inventore amet dignissimos ipsam ut
              voluptatibus ullam aut in, tenetur veritatis impedit enim
              laboriosam ipsum cum optio fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastorDetails;
