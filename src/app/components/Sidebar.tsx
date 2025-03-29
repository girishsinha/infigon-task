//
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  name: string;
  path: string;
  testTitle: string;
  icon: string;
  subLinks: { name: string; path: string }[];
  color: string;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const links: LinkItem[] = [
    {
      name: "Test 1",
      path: "/your-report/test1",
      testTitle: "Personality Explorer",
      icon: "/testicon/test 1.svg",
      subLinks: [
        {
          name: "Understanding Personality Explorer",
          path: "/your-report/test1",
        },
        { name: "Personality Types", path: "/your-report/test1/personality" },
        { name: "Your Result ", path: "/your-report/test1/yourresult" },
      ],
      color: "#0047AB",
    },
    {
      name: "Test 2",
      path: "/your-report/test2",
      icon: "/testicon/test 2.svg",
      testTitle: "Interest Explorer",
      color: "#309759",
      subLinks: [
        {
          name: "Understanding Interest Explorer",
          path: "/your-report/test2",
        },
        { name: "RIASEC Model", path: "/your-report/test2/riasecmodel" },
        { name: "Your Result", path: "/your-report/test2/yourresult" },
      ],
    },
    {
      name: "Test 3",
      path: "/your-report/test3",
      testTitle: "Career Motivators",
      icon: "/testicon/test 3.svg",
      subLinks: [
        {
          name: "Understanding Career Motivators",
          path: "/your-report/test3",
        },
        {
          name: "10 Career Motivators",
          path: "/your-report/test3/careermotivators",
        },
        { name: "Your Result", path: "/your-report/test3/yourresult" },
      ],
      color: "#FF9706",
    },
    {
      name: "Test 4",
      path: "/your-report/test4",
      testTitle: "Career Motivators",
      icon: "/testicon/test 4.svg",
      subLinks: [
        {
          name: "Understanding Emotional Intelligence",
          path: "/your-report/test4",
        },
        {
          name: "Daniel Goleman Emotional Intelligence Test",
          path: "/your-report/test4/golemanemotional",
        },
        { name: "Your Result", path: "/your-report/test4/yourresult" },
      ],
      color: "#398BFF",
    },
    {
      name: "Test 5",
      path: "/your-report/test5",
      testTitle: "Learning Styles",
      icon: "/testicon/test 5.svg",
      subLinks: [
        {
          name: "Understanding  Learning Styles",
          path: "/your-report/test5",
        },

        { name: "Your Result", path: "/your-report/test5/yourresult" },
      ],
      color: "#DE5AFF",
    },
  ];

  return (
    <aside className="bg-white w-full lg:w-72 h-full p-4 my-2 sticky top-0 lg:overflow-x-visible overflow-x-scroll ">
      <ul className="flex flex-row lg:flex-col">
        {links.map(({ name, path, subLinks, testTitle, icon, color }) => (
          <li key={name}>
            <div>
              <Link
                href={path}
                style={{ borderRightColor: `${color}` }}
                className={`flex items-center justify-start gap-3 px-4 rounded-lg text-base m-2 transition h-20 w-64
                ${
                  subLinks.some((obj) => obj.path === pathname)
                    ? "border-r-4 shadow-xl"
                    : "hover:bg-gray-100"
                }
               `}
              >
                <img src={icon} alt="icon" className="h-9 w-9" />
                <div className="flex flex-col text-[#5B6871]">
                  <h3>{name}</h3>
                  <p style={{ color: `${color}` }}>{testTitle}</p>
                </div>
              </Link>
              {subLinks && (
                <ul
                  className={`pl-10 transition-all ease-in-out duration-300 overflow-hidden  ${
                    subLinks.some((obj) => obj.path === pathname)
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {subLinks.some((obj) => obj.path === pathname)
                    ? subLinks.map(({ name, path }) => (
                        <li key={name}>
                          <Link
                            href={path}
                            className={`duration-200 block text-sm text-[#5B6871] p-1 rounded-md ${
                              pathname === path
                                ? " font-bold text-black "
                                : "hover:bg-gray-200"
                            }`}
                          >
                            {name}
                          </Link>
                        </li>
                      ))
                    : ""}
                </ul>
              )}
            </div>
            <div className=" lg:border-t-2 border-[#E5E5E5] mx-2 "></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
