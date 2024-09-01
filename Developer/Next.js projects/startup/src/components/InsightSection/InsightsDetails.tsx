import React from "react";
import Heading from "../Heading/Heading";

interface InssigntsDetailsProps {
  left: string[];
  right: string[];
  heading:string;
}


const InsightsDetails:React.FC<InssigntsDetailsProps> = ({ left, right,heading }) => {
  return (
    <div className="my-14 border-bgIntroBorder border rounded-[8px] p-5">
      <Heading headingStyle="text-2xl" heading={heading} />
      <div className="flex flex-col md:flex-row gap-5">
        {/* LEFT */}
        <div className="border-bgIntroBorder border flex-1 rounded-[8px] p-5">
          <Heading heading="Strengths" headingStyle="text-xl" />
          <ul className="ml-5">
            {Array.isArray(left) &&
              left.map((strength: string, index: number) => (
                <li key={index} className="list-disc">
                  {strength}
                </li>
              ))}
          </ul>
        </div>
        {/* LEFT */}

        {/* RIGHT */}
        <div className="border-bgIntroBorder flex-1
         border rounded-[8px] p-5">
          <Heading heading="Weaknesses" headingStyle="text-xl" />
          <ul className="ml-5">
            {Array.isArray(right) &&
              right.map((weakness: string, index: number) => (
                <li key={index} className="list-disc">
                  {weakness}
                </li>
              ))}
          </ul>
        </div>
        {/* RIGHT */}
      </div>
    </div>
  );
};

export default InsightsDetails;
