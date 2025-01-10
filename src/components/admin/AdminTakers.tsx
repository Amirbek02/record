"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuData from "@/utils/adminmenu";

const AdminMenu = () => {
  const [openMainSection, setOpenMainSection] = useState<number | null>(null);
  const [openSubSections, setOpenSubSections] = useState<
    Record<number, number | null>
  >({});

  const toggleMainSection = (mainIndex: number) => {
    setOpenMainSection(openMainSection === mainIndex ? null : mainIndex);
    setOpenSubSections({}); // Close all subsections when the main section changes
  };

  const toggleSubSection = (mainIndex: number, itemIndex: number) => {
    setOpenSubSections((prevState) => ({
      ...prevState,
      [mainIndex]: prevState[mainIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <div className="p-6 bg-purple-100 min-h-screen">
      <h1 className="text-lg font-semibold mb-4">Админ тезмеси</h1>
      <div className="space-y-6">
        {menuData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-lg shadow p-4">
            {/* Main Section Header */}
            <div
              className="flex justify-between items-center cursor-pointer bg-purple-200 rounded-lg p-3"
              onClick={() => toggleMainSection(sectionIndex)}
            >
              <h2 className="text-md font-medium">{section.title}</h2>
              <Image src="/icons/pensil.svg" width={24} height={24} alt="img" />
              <Image src="/icons/pensil.svg" width={24} height={24} alt="img" />
              <Image src="/icons/pensil.svg" width={24} height={24} alt="img" />

              <span
                className={`transform transition-transform ${
                  openMainSection === sectionIndex ? "rotate-90  " : ""
                }`}
              >
                ▶
              </span>
            </div>

            {/* Main Section Content */}
            {openMainSection === sectionIndex && (
              <div className="pl-4 mt-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {/* Subsection Header */}
                    <div
                      className="flex justify-between items-center cursor-pointer bg-purple-50 rounded-lg p-2 mt-2"
                      onClick={() => toggleSubSection(sectionIndex, itemIndex)}
                    >
                      <span className="font-medium">{item.title}</span>
                      <span
                        className={`transform transition-transform ${
                          openSubSections[sectionIndex] === itemIndex
                            ? "rotate-90"
                            : ""
                        }`}
                      >
                        ▶
                      </span>
                    </div>

                    {/* Subsection Content */}
                    {openSubSections[sectionIndex] === itemIndex && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.cons.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex justify-between items-center bg-purple-100 rounded p-2 text-sm"
                          >
                            {subIndex + 1}. {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
