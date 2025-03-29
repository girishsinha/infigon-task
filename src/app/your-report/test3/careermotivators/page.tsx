import React from "react";
import CardGray from "@/app/components/CardGray";
import purpose from "@/app/utility/purposeCM.json";
import benefits from "@/app/utility/benefitsCM.json";
const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        TOP 10 Career Motivators
      </h3>
      <div className="grid grid-cols-2 gap-4 items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Purpose and Applications of Career Motivators in career development
        include
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {purpose.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Benefits of understanding interest using career motivators for career
        planning include
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {benefits.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Page;

const Card: React.FC = () => {
  return (
    <div className=" flex p-2 ring-1 items-center ring-[] rounded-full ">
      <div className="bg-[#E5E5E5] flex items-center justify-center font-bold text-white rounded-full w-8 h-8">
        <h3>1</h3>
      </div>
      <h3 className="text-[#5B6871] text-center w-full">Engineer</h3>
    </div>
  );
};
