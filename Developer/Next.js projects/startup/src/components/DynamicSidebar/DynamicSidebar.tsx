"use client";
import React from "react";
import { mainPageTabs, funStuffTabs } from "@/lib/constants";
import { MenuTabs } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import path from "path";

const DynamicSidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {
        <div className="bg-bgWhite overflow-x-auto customScroll w-[340px] md:w-[500px] lg:w-[135px] lg:min-h-[215px] rounded-lg p-1 shadow-sm flex flex-row gap-2 lg:gap-0 lg:flex-col mb-6 lg:mb-0">
          {pathname === "/" &&
            mainPageTabs.map((tab: MenuTabs) => (
              <Link
                className={`${
                  pathname === tab.url ? "bg-black px-8 md:px-2 text-white" : ""
                } px-8 md:px-4 lg:px-1 py-3 my-1 rounded-lg hover:bg-black hover:text-white`}
                href={tab.url}
                key={tab.id}
              >
                <div className="flex gap-1 items-center">
                  <Image src={tab.iconUrl} alt="Logo" width={20} height={20} />
                  <p className="text-[14px]">{tab.name}</p>
                </div>
              </Link>
            ))}
          {pathname === "/fun-stuff" &&
            funStuffTabs.map((tab) => (
              <Link
                className={`${
                  pathname === tab.url ? "bg-black px-8 md:px-2 text-white" : ""
                } px-8 md:px-4 lg:px-1 py-0 flex md:py-3 my-1 rounded-lg hover:bg-black hover:text-white`}
                href={tab.url}
                key={tab.id}
              >
                <div className="flex gap-1 items-center">
                  {/* <Image src={tab.iconUrl} alt="Logo" width={20} height={20} /> */}
                  <p className="text-[14px]">{tab.name}</p>
                </div>
              </Link>
            ))}
          {pathname === "/partnering" &&
            funStuffTabs.map((tab) => (
              <Link
                className={`${
                  pathname === tab.url ? "bg-black px-8 md:px-2 text-white" : ""
                } px-8 md:px-4 lg:px-1 py-0 flex md:py-3 my-1 rounded-lg hover:bg-black hover:text-white`}
                href={tab.url}
                key={tab.id}
              >
                <div className="flex gap-1 items-center">
                  {/* <Image src={tab.iconUrl} alt="Logo" width={20} height={20} /> */}
                  <p className="text-[14px]">{tab.name}</p>
                </div>
              </Link>
            ))}
        </div>
      }
    </>
  );
};
export default DynamicSidebar;
