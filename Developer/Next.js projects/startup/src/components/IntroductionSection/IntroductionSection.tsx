import React from "react";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <div>
      {/* Profile Header  */}
      <div className="flex items-center gap-4">
        <Image src="/images/avatar.svg" alt="logo" width={35} height={35} />
        <h1>Work History</h1>
      </div>
      {/* Intro Section */}
      <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-3 w-full">
        {/* Left Section */}
        <div className="flex-1 bg-bgWhite rounded-[8px] border-bgIntroBorder border-[1px] p-4 flex flex-col">
          <div className="shadow-md w-full border-bgIntroBorder border-[1px] rounded-md p-3">
            {/* Inner Container Profile Section */}
            <div className="flex gap-3 items-center">
              <Image
                src="/images/profileAvatar.svg"
                alt="logo"
                width={35}
                height={35}
              />
              <div className="">
                <h1 className="text-[12px]">Andy Sietsema</h1>
                <p className="text-textGray text-[11px] font-light">
                  Account Manager
                </p>
              </div>
            </div>
            {/* Inner Container Tags */}
            <div className="mt-2 flex flex-wrap gap-1">
              <div className="flex items-center gap-1 bg-bgIntro p-1 rounded-sm w-fit">
                <Image
                  src="/icons/mailIcon.svg"
                  width={18}
                  height={18}
                  alt="mail-icon"
                />
                <p className="text-textSteelGray text-[8px]">
                  write@andysietsema.com
                </p>
              </div>
              <div className="flex items-center gap-1 bg-bgIntro p-1 rounded-sm w-fit">
                <Image
                  src="/icons/callIcon.svg"
                  width={18}
                  height={18}
                  alt="call-icon"
                />
                <p className="text-textSteelGray text-[8px]">+18188498624</p>
              </div>
              <div className="flex items-center gap-1 bg-bgIntro p-1 rounded-sm w-fit">
                <Image
                  src="/icons/calenderIcon.svg"
                  width={18}
                  height={18}
                  alt="calendar-icon"
                />
                <p className="text-textSteelGray text-[8px]">My Calendar</p>
              </div>
            </div>
          </div>
          {/* Inner Container IntroText */}
          <div className="pt-6 flex-grow">
            <h1 className="pb-4 font-semibold text-[22px]">Hello !</h1>
            <p className="text-textIntro">
              If you&apos;re seeing this page, I probably applied for a job at
              your company 🤞
              <br />
              <br />
              Take a look around and don&apos;t be a stranger, let me know how I
              can help :)
              <br />
              <br />
              Hope to hear from you soon!
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 rounded-[8px] flex items-center justify-center">
          <Image
            src="/images/introProfile.svg"
            alt="logo"
            width={0}
            height={0}
            className="h-full w-full object-cover rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
