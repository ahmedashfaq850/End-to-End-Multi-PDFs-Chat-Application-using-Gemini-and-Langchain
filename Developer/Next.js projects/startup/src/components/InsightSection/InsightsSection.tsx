import Image from "next/image";
import React from "react";
import Heading from "../Heading/Heading";

const InsightsSection = () => {
  return (
    <div className="my-14 border-bgIntroBorder border rounded-[8px] p-5">
      <div className="mb-10">
        <Heading headingStyle="text-2xl" heading="Insights Discovery" />
        <p className="text-sm">
          In 2017, the HR Team at FloQast organized a fun workshop called
          Insights Discovery. I admit it seemed cheesy at first, but I learned a
          lot about myself and my co-workers. This workshop highlighted our
          strengths and weaknesses and helped us understand how we all preferred
          to work together.
          <br />
          At the end of the workshop, we received a PDF report all about us (see
          mine below) and these colorful bricks. Afterwards, everyone placed
          these bricks on their desk to show how they prefer to communicate.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-5">
        {/* PDF BLOCK LEFT*/}
        <div className="flex border-bgIntroBorder flex-1 p-5 border rounded-[8px] flex-col">
          {/* DOWNLOAD  */}
          <div className="sm:flex justify-between ">
            <div className=" sm:flex items-center gap-2 mb-5 text-gray-500">
              <Image
                src={"/icons/resumeIcon.svg"}
                width={20}
                height={20}
                alt="resume icon"
              />
              <p className="text-xs">AndySietsema - 34 Coordinating Ob.pdf</p>
            </div>
            {/* DOWNLOAD ICON */}
            <div className="sm:self-start mb-2 sm:mb-0 cursor-pointer">
              <Image
                src={"/icons/download.svg"}
                width={20}
                height={20}
                alt={"download icon"}
              />
            </div>
          </div>
          {/* DOWNLOAD  */}
          {/* PDF COVER */}
          <Image
            src={"/images/pdfCover.svg"}
            width={0}
            height={0}
            className="object-contain lg:object-cover w-full h-full"
            alt={"pdf cover"}
          />
          {/* PDF COVER */}
        </div>
        {/* PDF BLOCK LEFT*/}

        {/* RIGHT SECTION */}
        <div className="flex px-10 py-10 flex-1 border-bgIntroBorder border rounded-[8px] flex-col">
          <ul className="text-sm">
            <li className="list-disc">Blue = I want to look at the data</li>
            <li className="list-disc">Green = I want a good experience</li>
            <li className="list-disc">Red = I want answers quickly</li>
            <li className="list-disc">
              Yellow = I want to have fun along the way
            </li>
          </ul>
          <div className="mt-2 self-center">
            <Image
              src={"/images/chart.svg"}
              width={200}
              height={150}
              alt="chart"
            />
          </div>
        </div>
        {/* RIGHT SECTION */}
      </div>
    </div>
  );
};

export default InsightsSection;
