import React from "react";
import CardGray from "@/app/components/CardGray";
import purpose from "@/app/utility/purposeCM.json";
import benefits from "@/app/utility/benefitsCM.json";
import topTen from "@/app/utility/topTen.json";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        TOP 10 Career Motivators
      </h3>
      <div className="grid grid-cols-2 gap-4 items-center">
        {topTen.map(({ title, color, num }) => (
          <Card key={num} title={title} color={color} num={num} />
        ))}
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

interface data {
  title: string;
  color: string;
  num: number;
}

const Card: React.FC<data> = ({ title, color, num }) => {
  return (
    <div
      style={{ borderColor: `${color}` }}
      className=" flex p-2 border-2 items-center  rounded-full "
    >
      <div
        style={{ backgroundColor: `${color}` }}
        className=" flex items-center justify-center font-bold text-white rounded-full w-8 h-8"
      >
        <h3 className="text-white">{num}</h3>
      </div>
      <h3 className="font-bold text-center w-full">{title}</h3>
    </div>
  );
};
