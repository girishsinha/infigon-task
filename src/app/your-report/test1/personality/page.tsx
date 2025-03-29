import React from "react";
import CardGray from "@/app/components/CardGray";

const Page: React.FC = () => {
  return (
    <div className="">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4  ">
        Personality Types
      </h3>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-4 ">
        <PersnalityCard />
        <PersnalityCard />
        <PersnalityCard />
        <PersnalityCard />
        <PersnalityCard />
      </div>
    </div>
  );
};

export default Page;

const PersnalityCard = () => {
  return (
    <div className="flex flex-col gap-2 w-60 h-64 hover:shadow-sm  hover:ring-1 p-2 ring-[#CACACA] hover:bg-gray-100 rounded-xl">
      <div className=" h-24 bg-[#D9E9F0] rounded-xl flex items-center justify-center">
        <img src="/characters/inspector.png" alt="charactor" />
      </div>
      <div>
        <h3 className="font-bold flex items-center justify-between text-sm pr-2">
          Inspector
          <span className=" rounded-full p-2 bg-[#D9E9F0] text-[#3D6272]">
            ISTJ
          </span>
        </h3>
      </div>
      <p className="text-[#5B6871] text-sm font-light">
        Focuses on concrete, tangible information and present realities tangible
        information and present realities
      </p>
    </div>
  );
};
