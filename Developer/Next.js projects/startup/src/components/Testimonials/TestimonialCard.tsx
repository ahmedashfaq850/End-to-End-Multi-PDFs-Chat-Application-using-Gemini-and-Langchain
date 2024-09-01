import React from "react";
import Image from "next/image";
import { DotFilledIcon as DotIcon } from "@radix-ui/react-icons";
import TestimonialDescCard from "./TestimonialDescCard";

// API DATA WAS PROVIDED LATER
interface TestimonialCardProps {
  name: string;
  imageUrl: string;
  testimonialDescShort: string;
  date: string;
  linkedin?: string;
  profileDesc: string;
  testimonialDescription:string
  connection_level:string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  imageUrl,
  testimonialDescShort,
  date,
  profileDesc,
  testimonialDescription,
  connection_level
}) => {
  
  return (
    <div className="flex flex-col lg:flex-row justify-between  gap-5 mb-5 px-2 md:pl-6 md:pr-4  rounded-[8px] border-bgIntroBorder border  w-full">
      <div className="bg-white border w-full h-fit lg:w-2/5 p-5   border-bgIntroBorder rounded-[8px] my-5 lg:my-auto shadow-sm">
        <div className="flex  items-center ">
          <Image
            src={ imageUrl+'.svg'}
            alt={`${name}'s picture`}
            width={48}
            height={48}
            className="rounded-full  self-start mt-2"
          />
          <div className="ml-2">
            <div className="flex flex-col ">
              <div className=" flex items-center">
                <p className="font-semibold text-sm">{name}</p>
                <Image
                  src={"/icons/linkedinIcon.svg"}
                  className="ml-1 "
                  width={15}
                  height={15}
                  alt="linkedin"
                />
                <DotIcon fontSize={2} color="gray" />
                <p className="text-gray-500 text-sm"> {connection_level}</p>
              </div>
              {/* ProfileDesc */}
              <div className="">
                <p className="font-medium text-sm">{profileDesc}</p>
                {/* <p className=" text-gray-500 line-clamp-2 text-sm">
                  {date},{testimonialDescShort}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 my-5 xl:my-6 ">
        <TestimonialDescCard desc={testimonialDescription} />
      </div>
    </div>
  );
};

export default TestimonialCard;
