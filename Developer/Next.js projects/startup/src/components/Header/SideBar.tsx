"use client";
import { menuTabs } from "@/lib/constants";
import { MenuTabs, SidebarProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Logo Here</h2>
          <Image
            src="/icons/closeIcon.png"
            className="cursor-pointer"
            alt="close"
            width={30}
            height={30}
            onClick={toggleSidebar}
          />
        </div>
        <div className="mt-6 flex flex-col">
          {menuTabs.map((tab: MenuTabs) => (
            <Link
              onClick={toggleSidebar}
              className={`${
                pathname === tab.url ? "bg-tabBackground px-2" : ""
              } px-1 py-3 my-2 rounded-lg hover:bg-tabBackground`}
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
      </div>
    </div>
  );
};

export default Sidebar;
