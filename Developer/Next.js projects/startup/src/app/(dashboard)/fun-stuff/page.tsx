import React from "react";
import Image from "next/image";
import Link from "next/link";
import { funStuffText, placesData } from "@/lib/constants";

const page = () => {
  return (
    <div className="mx-4 px-4 sm:px-3 md:px-4 lg:px-4 xl:px-1 min-h-[100vh] w-[360px] md:w-[600px] lg:w-[700px]">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <Image src="/images/avatar.svg" alt="logo" width={35} height={35} />
        <h1>Fun Stuff</h1>
      </div>
      {/* Youtube Embedded */}
      <div className="w-full mt-4 min-h-[200px] bg-bgWhite my-3 rounded-lg border-[1px] border-bgIntroBorder p-4">
        <h1 className="font-semibold text-[20px]">Podcast</h1>
        <p className="text-textIntro font-light text-[11px] py-2">
          In 2023, I decided to start a podcast for fun, which I called
          &apos;workstuff, a podcast&apos;. I interviewed 10 people (most of
          whom I knew well, a few I had never met) to learn about their career
          journeys. After a while, I decided it wasn&apos;t how I wanted to
          spend my time (I produced everything on my own) and converted it all
          to Substack (because it&apos;s free).
        </p>
        <div className="my-4 bg-borderColor border-[1px] rounded-sm w-full h-[250px] flex justify-center items-center border-bgIntroBorder">
          <Image
            src="/icons/youtubeIcon.svg"
            alt="logo"
            width={65}
            height={55}
          />
        </div>
      </div>

      {/* College SuperFan */}
      <div className=" my-14">
        <div className="w-full min-h-[200px] my-6 bg-bgWhite border-bgIntroBorder border-[1px] rounded-lg p-4">
          {/* Company Name */}
          <h1 className="font-semibold text-[20px]">College Superfan</h1>
          {/* Company Intro Container */}
          <div className="w-full min-h[200px] flex items-center bg-bgJobSection my-3 rounded-md p-4 shadow-md">
            <div>
              <h1 className="text-[13px] font-semibold">
                collegesuperfans.com
              </h1>
              <p className="text-textIntro font-light text-[11px] py-2">
                Make Your Picks
              </p>
              <div className="flex gap-1 items-center">
                <Image
                  src="/icons/funIco.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <Link href="" className="text-textLink text-[12px]">
                  https://www.collegesuperfans.com/
                </Link>
              </div>
            </div>
          </div>
          {/* Job Description Container */}
          <div className="w-full min-h-[200px] bg-bgWhite rounded-md border-[1px] border-bgIntroBorder p-4 mt-5">
            <p
              className="text-textIntro font-regular text-[14px]"
              dangerouslySetInnerHTML={{ __html: funStuffText }}
            />
          </div>
        </div>
      </div>

      {/* Places Visited Section */}

      <div className="w-full min-h-[200px] my-6 bg-bgWhite border-bgIntroBorder border-[1px] rounded-lg p-4">
        {/* Company Name */}
        <h1 className="font-semibold text-[20px] mb-4">
          Places I&apos;ve Lived
        </h1>
        {/* Places Mapping */}
        {placesData.map((place) => (
          <div
            key={place.id}
            className={`w-full min-h-[200px] flex flex-col md:flex-row gap-3 my-4 border-bgIntroBorder border-[1px] rounded-md p-3 bg-bgWhite ${
              place.id % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 rounded-md">
              <Image
                src={place.img}
                alt="place-image"
                width={0}
                height={0}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-end rounded-md border-[1px] pb-8 border-bgIntroBorder">
              <h1 className="text-[15px] font-bold">{place.title}</h1>
              <p className="text-textIntro font-light mt-1">{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
