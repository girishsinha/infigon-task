import React from "react";
import pernality from "@/app/utility/personality.json";

const Page: React.FC = () => {
  return (
    <div className="">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4  ">
        Personality Types
      </h3>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-4 ">
        {pernality.map((data, i) => (
          <PersnalityCard
            key={i}
            title={data.title}
            color={data.color}
            textColor={data.textColor}
            badge={data.badge}
            dec={data.dec}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
interface Personality {
  title: string;
  color: string;
  textColor: string;
  badge: string;
  dec: string;
  img: string;
}

const PersnalityCard: React.FC<Personality> = ({
  title,
  color,
  textColor,
  badge,
  dec,
  img,
}) => {
  return (
    <div className="flex flex-col gap-2 w-60 h-64 hover:shadow-sm  hover:ring-1 p-2 ring-[#CACACA] hover:bg-gray-100 rounded-xl">
      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className=" h-24 rounded-xl flex items-center justify-center"
      >
        <img src={img} alt="charactor" />
      </div>
      <div>
        <h3 className="font-bold flex items-center justify-between text-sm pr-2">
          {title}
          <span
            style={{ color: `${textColor}`, backgroundColor: `${color}` }}
            className=" rounded-full p-2 "
          >
            {badge}
          </span>
        </h3>
      </div>
      <p className="text-[#5B6871] text-sm font-light">{dec}</p>
    </div>
  );
};
