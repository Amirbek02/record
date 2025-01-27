"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavTabs = () => {
  const pathname = usePathname();
  const tabs = [
    {
      tab: "Жөндөө",
      pathName: "/in/profile",
    },
    {
      tab: "Видео сабак",
      pathName: "/in/profile/video-lessons",
    },
    {
      tab: "Тест",
      pathName: "/in/profile/profile-tests",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-9">
        {tabs.map((tab, index) => (
          <li key={index} className="list-none  ">
            <Link
              href={tab.pathName}
              className={`link ${
                pathname === tab.pathName
                  ? "font-semibold "
                  : "font-normal  hover:bg-gray-200 hover:text-black"
              } text-xl text-darkGrey`}
            >
              {tab.tab}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
