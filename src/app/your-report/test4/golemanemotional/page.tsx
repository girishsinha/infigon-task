import React from "react";
import CardGray from "@/app/components/CardGray";
import intelligences from "@/app/utility/intelligenceTest.json";

interface circul {
  color: string;
  tag: string;
  num: number;
}
const Page: React.FC = () => {
  interface obj {
    color: string;
    tag: string;
    num: number;
  }
  const elements: obj[] = [
    {
      color: "#FF962D",
      tag: "Self-Awareness",
      num: 1,
    },
    {
      color: "#00A3FF",
      tag: "Self-Regulation",
      num: 2,
    },
    {
      color: "#B97979",
      tag: "Empathy",
      num: 3,
    },
    {
      color: "#EE82FF",
      tag: "Social Skills",
      num: 4,
    },
    {
      color: "#2CCFA1",
      tag: "Motivation",
      num: 5,
    },
  ];

  interface card {
    title: string;
    description: string;
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        5 Emotional Elements
      </h3>
      <div className="flex flex-row gap-8 items-center overflow-x-scroll p-4">
        {elements.map(({ color, tag, num }) => (
          <Circul key={num} color={color} tag={tag} num={num} />
        ))}
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Applications of the Emotional Intelligence Test in career development
        include
      </h3>
      <p className="text-[#5B6871]">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {intelligences.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Understanding emotional intelligence for career planning offers several
        benefits, including
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        <CardGray
          title={"improved Interpersonal Relationships"}
          description={
            "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities"
          }
        />
        <CardGray
          title={"Enhanced Job Performance"}
          description={
            "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities"
          }
        />
      </div>
    </div>
  );
};

export default Page;

const Circul: React.FC<circul> = ({ color, tag, num }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( ${color},white, ${color})`,
        boxShadow: `0px 10px 20px ${color}`,
      }}
      className={`relative flex flex-col items-center justify-center gap-1 scroll-container min-w-40 h-40   rounded-full `}
    >
      <div
        style={{ backgroundColor: `${color}` }}
        className={`flex items-center justify-center w-10 h-10 bg-${color} text-white font-semibold rounded-full`}
      >
        {num}
      </div>
      <p className="text-center text-black font-medium">{tag}</p>
    </div>
  );
};
