"use client";
import { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center border-2 border-[#E8EDF1] h-[72px] w-full md:text-sm text-lg">
      <div className="container mx-auto flex items-center justify-between ml-[5%] w-1/2 h-full ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img src="/Logo.png" alt="logo" />
        </Link>

        {/* Menu Items */}
        <ul
          className={`md:flex items-center md:flex-row flex-col gap-8 md:gap-0 md:space-x-6 z-10 absolute md:static p-10 pt-20  md:p-0 md:w-auto w-2/3 h-full  top-0 md:top-0 transition-all duration-100 ${
            isOpen ? "right-0 block" : "-right-72 hidden"
          }  text-[#5B6871] bg-white `}
        >
          <li className="">
            <Link
              href="/"
              className=" hover:text-gray-600 focus:bg-[#F9FAFB] md:p-2.5 rounded-lg focus:text-black"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="hover:text-gray-600 focus:bg-[#F9FAFB] md:p-2.5 rounded-lg focus:text-black"
            >
              My Test
            </Link>
          </li>
          <li className=" ">
            <Link
              href="/"
              className="hover:text-gray-600 focus:bg-[#F9FAFB] md:p-2.5 rounded-lg focus:text-black"
            >
              My Session
            </Link>
          </li>
          <li className=" ">
            <Link
              href="/"
              className="hover:text-gray-600 focus:bg-[#F9FAFB] md:p-2.5 rounded-lg focus:text-black"
            >
              Career Library
            </Link>
          </li>
          <li className=" ">
            <Link
              href="/your-report"
              className="hover:text-gray-600 focus:bg-[#F9FAFB] md:p-2.5 rounded-lg focus:text-black"
            >
              Your Report
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-around  w-30  mr-[5%]">
        <img src="/Bell.png" alt="icon" className="w-8 h-8" />

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex items-center justify-around w-1/2 z-50`}
        >
          <img
            src="/avatar.png"
            alt="avatar"
            className="rounded-full w-8 h-8"
          />
          <img src="/CaretDown.png" alt="down" className="w-4 h-4" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block focus:outline-none z-50"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      {/* Mobile Menu Button */}
    </nav>
  );
};

export default NavBar;
