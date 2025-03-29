import React from "react";
import CardGray from "@/app/components/CardGray";

const Page: React.FC = () => {
  interface card {
    title: string;
    description: string;
  }
  const purpose: card[] = [
    {
      title: "Self Awareness",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Leadership Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Alignment",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Planning",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Team Building",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Conflict Resolution",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Communication",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Strength Identification",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Personal Growth",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl  font-bold">
        Understanding
        <span className="text-[#FF9706] pt-4"> Career Motivators</span>
      </h1>
      <h3 className="font-bold text-lg">Introduction</h3>
      <p className="text-base text-[#5B6871]">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 place-items-start gap-6">
        <img src="/ear.svg" alt="img" />
        <img src="/eye.svg" alt="img" />
        <img src="/book.svg" alt="img" />
        <img src="/hand.svg" alt="img" />
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        The purposes and applications of learning styles in career development
        include
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {purpose.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        The purposes and applications of learning styles in career development
        include
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 place-items-start gap-6">
        {purpose.map(({ title, description }) => (
          <CardGray key={title} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Page;
