import React from "react";
import CardGray from "@/app/components/CardGray";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl  font-bold">
        Your
        <span className="text-[#0047AB] pt-4">Result</span>
      </h1>
      <ul className="flex gap-6 border-b-2 text-[#5B6871]  overflow-x-scroll scroll-container border-[#E5E5E5]">
        <li className="font-bolt text-black border-b-2 border-[#0047AB] p-2">
          Personality
        </li>
        <li className="font-bolt p-2">Characterisitics</li>
        <li className="font-bolt p-2">Strengths/ Weaknesses</li>
        <li className="font-bolt p-2">Work Style</li>
        <li className="font-bolt p-2">Preferences</li>
        <li className="font-bolt p-2">Interpersonal Interaction</li>
        <li className="font-bolt p-2">Work Culture</li>
        {/* <li className="font-bolt p-2">Roles</li> */}
        {/* <li className="font-bolt p-2">Case Studies</li>
        <li className="font-bolt p-2">Famous Personalities</li>
        <li className="font-bolt p-2">Recommendations</li>
        <li className="font-bolt p-2">Conclusion</li> */}
      </ul>
      <div className="flex flex-col gap-6 ">
        <h1 className="text-2xl font-bold flex gap-6 text-[#FF6969] ">
          <img src="/realistic.svg" alt="icon" /> Architect
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
          <h3 className=" rounded-full p-1 px-3 ring-1 ring-[#FF6969] text-[#FF6969]">
            Practical and Hands-On
          </h3>
          <h3 className=" rounded-full p-1 px-3 ring-1 ring-[#FF6969] text-[#FF6969]">
            Problem-solvers who prefer tangible results
          </h3>
          <h3 className=" rounded-full p-1 px-3 ring-1 ring-[#FF6969] text-[#FF6969]">
            Enjoying work with tools and machinery
          </h3>
          <h3 className=" rounded-full p-1 px-3 ring-1 ring-[#FF6969] text-[#FF6969]">
            Value efficiency and effectiveness in tasks
          </h3>
        </div>
        <p className="text-base text-[#5B6871]">
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
      </div>
    </div>
  );
};

export default Page;
