import React from "react";
import CardGray from "@/app/components/CardGray";
import purpose from "@/app/utility/purposeRIASEC.json";
import benefits from "@/app/utility/benefitsRIASEC.json";
const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        THE FOUR DICHOTOIES
      </h3>
      <div className="flex flex-col gap-2 items-center">
        <img src="/graph.svg" alt="" />
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Purpose and Applications of RIASEC in Career Development
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {purpose.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Benefits of Understanding Interest Using RIASEC for Career Planning
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

// const Card: React.FC = () => {
//   return (
//     <div className=" w-72 h-24 border-2 p-2 border-[#CACACA] rounded-xl">
//       <h3 className="font-bold"> Extraversion (E) </h3>
//       <p className="text-[#5B6871]">
//         Energized by social interactions and external activities
//       </p>
//     </div>
//   );
// };
