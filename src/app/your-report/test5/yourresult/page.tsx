import React from "react";
import CardGray from "@/app/components/CardGray";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl  font-bold">
        Your
        <span className="text-[#DE5AFF] pt-4">Result</span>
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
        <h1 className="text-2xl font-bold flex gap-6 text-[#FF504F] ">
          <img src="/ear.svg" alt="icon" className="w-10" />
          Kinesthetic
        </h1>
        <p className="text-[#5B6871]">
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

const Card: React.FC = () => {
  return (
    <div className="h-96 p-2">
      <div className="flex justify-between p-4 items-center">
        <h1 className=" rounded-full ring-1 ring-black text-center p-1 w-8 h-8">
          1
        </h1>
        <h3 className="font-bold"> Achievement and Results</h3>
        <div className="bg-red-400 flex items-center rounded-full gap-2 p-2">
          <h3>25/30</h3>
          <div className="h-7 w-7 rounded-full bg-black ring-1 ring-white"></div>
        </div>
      </div>
      <div className="ring-1 ring-black rounded-2xl p-6">
        <p className="text-[#5B6871]">
          Prefer tasks that involve physical work and create outcomes. Prefer
          tasks that involve physical work and create outcomes.Prefer tasks that
          involve physical work and create outcomes.
        </p>
        <ul className="text-[#5B6871]">
          <li>
            <h3 className="font-bold text-black">{"\u25CF"}pros</h3>
            <p>
              They are friendly, approachable, & enjoy being around people. They
              are often seen as the "hosts" of their social circles.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-black">{"\u25CF"} cons</h3>{" "}
            <p>
              They are friendly, approachable, & enjoy being around people. They
              are often seen as the "hosts" of their social circles.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
