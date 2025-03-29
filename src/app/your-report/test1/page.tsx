import React from "react";
import CardGray from "../../components/CardGray";
import Image from "next/image";
import purpose from "@/app/utility/purposeMBTI.json";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl  font-bold">
        Understanding
        <span className="text-[#0047AB] pt-4"> Personality Explorer</span>
      </h1>
      <h3 className="font-bold text-lg">Introduction</h3>
      <p className="text-base text-[#5B6871]">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
      <p className="text-base text-[#5B6871]">
        <span className="text-black font-bold">
          To understand your personality Myers-Brig Type Indicator (MBTI) test
          was used.
        </span>
        It is a personality explorer psychometric assessment tool that helps
        individuals understand their preferences, strengths, and areas for
        growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the
        MBTI categorizes individuals into 16 personality types based on four
        dichotomies. The goal is to gain deeper self-awareness, enhance personal
        development, and improve interpersonal relationships
      </p>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        THE FOUR DICHOTOIES
      </h3>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex md:flex-row flex-col gap-2 ">
          <Card />
          <Image
            width={140}
            height={140}
            src="/line.svg"
            alt="line"
            className="md:block hidden"
          />
          <Card />
        </div>

        <div className="flex md:flex-row flex-col gap-2 ">
          <Card />
          <Image
            width={140}
            height={140}
            src="/line.svg"
            alt="line"
            className="md:block hidden"
          />
          <Card />
        </div>

        <div className="flex md:flex-row flex-col gap-2 ">
          <Card />
          <Image
            width={140}
            height={140}
            src="/line.svg"
            alt="line"
            className="md:block hidden"
          />
          <Card />
        </div>

        <div className="flex md:flex-row flex-col gap-2 ">
          <Card />
          <Image
            width={140}
            height={140}
            src="/line.svg"
            alt="line"
            className="md:block hidden"
          />
          <Card />
        </div>
      </div>
      <h3 className="font-bold text-lg text-[#0047AB] pt-4">
        Purpose, Applications, and Benefits of MBTI in Career Development
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

const Card: React.FC = () => {
  return (
    <div className=" w-72 h-24 border-2 p-2 border-[#CACACA] rounded-xl">
      <h3 className="font-bold"> Extraversion (E) </h3>
      <p className="text-[#5B6871]">
        Energized by social interactions and external activities
      </p>
    </div>
  );
};
