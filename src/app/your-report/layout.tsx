"use client";
// app/dashboard/layout.tsx
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex md:flex-row flex-col md:h-40 p-8 md:px-14 gap-4 md:gap-0">
        <div className="flex flex-col justify-between md:h-20 md:w-3/5 w-full ">
          <h1 className="font-bold text-3xl">Your Career Analysis Report</h1>
          <p className="text-base text-[#5B6871]">
            Your Report ensures a complete understanding of your strengths,
            areas for growth, and ideal career fit.
          </p>
        </div>
        <div className="flex justify-around items-center lg:h-24 md:w-2/5 w-full border-2 border-[#E5E5E5] rounded-xl md:text-base text-sm p-4">
          <div>
            <p className="font-bold">
              Want to speak to an expert Career Counsellor?
            </p>
            <p className="text-[#5B6871] font-light">
              Explore a list of 1000+ Expert Career Counsellors near you!
            </p>
          </div>
          <button className="rounded-lg font-semibold bg-[#E5E5E5] h-9 lg:w-20 w-30">
            See All
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center   justify-center gap-4 lg:h-20 border-2 border-[#E5E5E5] p-5 md:px-12">
        <h3 className="text-[#5B6871]">
          Your <span className="font-semibold text-[#0047AB]">Top 3</span>{" "}
          Career Options
        </h3>
        <div className="grid grid-flow-row grid-cols-3 md:grid-flow-col gap-2 items-center">
          <div className=" flex p-1 gap-1 border-2 items-center border-[#E5E5E5] rounded-full h-10">
            <div className="bg-[#E5E5E5] flex items-center justify-center  font-bold text-white rounded-full w-7 h-7">
              <h3>1</h3>
            </div>
            <h3 className="text-[#5B6871]">Engineer</h3>
          </div>
          <div className=" flex p-1 gap-1 border-2 items-center border-[#E5E5E5] rounded-full h-10">
            <div className="bg-[#E5E5E5] flex items-center justify-center  font-bold text-white rounded-full w-7 h-7">
              <h3>1</h3>
            </div>
            <h3 className="text-[#5B6871]">Doctor</h3>
          </div>
          <div className=" flex p-1 gap-1 border-2 items-center border-[#E5E5E5] rounded-full h-10">
            <div className="bg-[#E5E5E5] flex items-center justify-center  font-bold text-white rounded-full w-7 h-7">
              <h3>1</h3>
            </div>
            <h3 className="text-[#5B6871]">Teacher</h3>
          </div>
        </div>
        <div className=" border-l-2 border-[#E5E5E5] h-full"></div>
        <div className="flex items-center gap-2">
          <h3 className="md:text-lg text-base font-bold">
            Choose them right here!
          </h3>
          <button className="rounded-lg text-white h-10 px-4 bg-[#0047AB]">
            You Career Options
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col md:px-12 relative top-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className=" m-8 px-4 overflow-auto lg:border-l-2 border-[#E5E5E5]">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center h-20 ">
        <h3 className=" text-[#B0BABF] underline">
          Privacy Policy • Terms & Conditions • Support
        </h3>
      </div>
    </main>
  );
}
