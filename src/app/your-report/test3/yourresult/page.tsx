import React from "react";

const Page: React.FC = () => {
  interface scores {
    title: string;
    description: string;
    list: string[];
    color: string;
    scoreColor: string;
  }

  const yourscores: scores[] = [
    {
      title: "Achievement and Results",
      color: "#1999A1",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Helping Others",
      color: "#A15A19",
      scoreColor: "#FFD146",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Financial Rewards",
      color: "#55DCDC",
      scoreColor: "#2DC054",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Creativity and Innovation",
      color: "#F6C61A",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Security and Stability",
      color: "#9140F8",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Leadership and Influence",
      color: "#00A3FF",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Continuous Learning",
      color: "#194CA1",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Independence",
      color: "#EE82FF",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Security and Stability",
      color: "#B97979",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
    {
      title: "Flexibility and Work-Life Balance",
      color: "#FA9B56",
      scoreColor: "#FF4646",
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      list: [
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
        "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl  font-bold">
        Your
        <span className="text-[#FF9706] pt-4">Result</span>
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
        <h1 className="text-2xl font-bold flex gap-6 text-[#0047AB] ">
          Your Scores
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
          {yourscores.map((data, i) => (
            <Card
              i={i + 1}
              key={i}
              title={data.title}
              description={data.description}
              list={data.list}
              color={data.color}
              scoreColor={data.scoreColor}
            />
          ))}
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

interface scores {
  i: number;
  title: string;
  description: string;
  list: string[];
  color: string;
  scoreColor: string;
}
const Card: React.FC<scores> = ({
  i,
  title,
  description,
  list,
  color,
  scoreColor,
}) => {
  return (
    <div className=" p-2">
      <div className="flex justify-between p-4 items-center">
        <h1
          style={{ color: `${color}` }}
          className={`rounded-full ring-1 ring-${color} text-center p-1 w-8 h-8`}
        >
          {i}
        </h1>
        <h3 className="font-bold text-center" style={{ color: `${color}` }}>
          {title}
        </h3>
        <div
          style={{ backgroundColor: `${color}` }}
          className=" flex items-center rounded-full gap-2 p-2"
        >
          <h3>25/30</h3>
          <div
            style={{ backgroundColor: `${scoreColor}` }}
            className="h-7 w-7 rounded-full ring-1 ring-white"
          ></div>
        </div>
      </div>
      <div
        style={{ borderColor: `${color}` }}
        className={`border-2 rounded-2xl p-6`}
      >
        <p className="text-[#5B6871]">{description}</p>
        <ul className="text-[#5B6871]">
          <li>
            <h3 className="font-bold text-black">{"\u25CF"}pros</h3>
            <p>{list[0]}</p>
          </li>
          <li>
            <h3 className="font-bold text-black">{"\u25CF"} cons</h3>{" "}
            <p>{list[1]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
