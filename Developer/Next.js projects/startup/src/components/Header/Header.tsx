"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { menuTabs, profileLinks } from "@/lib/constants";
import { MenuTabs } from "@/lib/types";
import { Button } from "../ui/button";
import Sidebar from "./SideBar";

const Header = () => {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProfileContainer = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 sm:px-3 md:px-4 lg:px-4 xl:px-8 py-4 pt-8">
        {/* Mobile Header */}
        <div className="lg:hidden cursor-pointer" onClick={toggleSidebar}>
          <Image src="/icons/menuIcon.png" alt="menu" width={40} height={40} />
        </div>

        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Desktop Header */}
        <div className="hidden lg:flex lg:h-[60px] xl:h-[70px] lg:gap-3 xl:gap-4 items-center bg-white rounded-[9px] px-3 shadow-sm border-borderColor border-1">
          {menuTabs.map((tab: MenuTabs) => (
            <Link
              className={`${
                pathname === tab.url ? "bg-tabBackground px-2" : ""
              } px-1 py-3 rounded-lg hover:bg-tabBackground`}
              href={tab.url}
              key={tab.id}
            >
              <div className="flex gap-1 items-center">
                <Image src={tab.iconUrl} alt="Logo" width={20} height={20} />
                <p className="text-[14px]">{tab.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Header right part */}
        <div className="flex items-center gap-0 md:gap-2">
          {/* Share Section */}
          <div className="md:bg-white lg:bg-bgTransparent xl:bg-white h-[70px] flex items-center rounded-[9px] px-3 md:shadow-sm lg:shadow-none xl:shadow-sm border-borderColor border-1">
            <div className="md:flex hidden gap-[3px] items-center lg:hidden xl:flex">
              <div className="bg-textGray w-[30px] h-[30px] rounded-full"></div>
              <div className="bg-textGray w-[30px] h-[30px] rounded-full"></div>
              <div className="bg-bgBlack text-textWhite w-[30px] h-[30px] flex justify-center items-center text-[14px] rounded-full">
                +2
              </div>
            </div>
            <Button
              className="bg-buttonSecondary text-textWhite ml-1 px-3 py-2 h-[40px]"
              onClick={() => console.log("Add")}
            >
              <Image
                src="/icons/profile.svg"
                alt="Add"
                width={20}
                height={20}
              />
              <p>Share</p>
            </Button>
          </div>
          {/* Profile Button */}
          <div
            className="flex gap-3  md:bg-bgWhite lg:bg-bgTransparent xl:bg-white h-[70px] cursor-pointer items-center rounded-[9px] px-3 md:shadow-sm lg:shadow-none xl:shadow-sm border-borderColor border-1"
            onClick={toggleProfileContainer}
          >
            <Image src="/images/avatar.svg" alt="logo" width={35} height={35} />
            <div className="hidden md:block lg:hidden xl:block">
              <h1 className="text-[12px]">Andy Sietsema</h1>
              <p className="text-textGray text-[11px] font-light">
                Account Manager
              </p>
            </div>
          </div>

          {/* Profile Container */}
          {isProfileOpen && (
            <div className="absolute right-6 top-[90px]  md:right-4 md:top-[90px] lg:right-10 lg:top-[78px] xl:right-8 xl:top-[90px] mt-2 w-[162px] bg-white rounded-b-sm shadow-sm border border-borderColor">
              <div className="p-2">
                {profileLinks.map((link: MenuTabs) => (
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2 cursor-pointer hover:bg-tabBackground rounded-lg px-2"
                    key={link.id}
                  >
                    <Image
                      src={link.iconUrl}
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                    <p className="text-[14px]">{link.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
