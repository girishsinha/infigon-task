import React from "react";

const Page: React.FC = () => {
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
      <p className="text-base text-[#5B6871]">
        <span className="text-black font-bold">
          To understand your interest RIASEC model was used.
        </span>
        It is a personality explorer psychometric assessment tool that helps
        individuals understand their preferences, strengths, and areas for
        growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the
        MBTI categorizes individuals into 16 personality types based on four
        dichotomies. The goal is to gain deeper self-awareness, enhance personal
        development, and improve interpersonal relationships
      </p>
    </div>
  );
};

export default Page;
