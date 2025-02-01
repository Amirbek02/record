"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { link } from "./HeaderSign";
import Link from "next/link";
import { Modal } from "../../UI/modal";
import { usePathname } from "next/navigation";

const HeaderSearch = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="flex justify-between py-[20px] items-center max-w-[1440px] w-[90%] mx-[auto]">
        <div
          className="flex flex-wrap items-center justify-between  lg:hidden "
          ref={sidebarRef}
          onClick={toggleSidebar}
        >
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button type="button">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative w-[60%] sm:w-[320px]">
          <AiOutlineSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-lg w-[22px] h-[22px] " />
          <input
            type="search"
            className="py-[16px]  pl-[50px] pr-[20px] text-[12px] sm:px-[50px] w-[90%] rounded-[30px] outline-none"
            style={{ boxShadow: "0px 15px 40px 5px rgb(237, 237, 237)" }}
            placeholder="Издөө.."
          />
        </div>
        <div className="flex gap-[10px] sm:gap-[20px]">
          <Image
            src="/icons/Notification.svg"
            alt=""
            width={27}
            height={29}
            className="w-[24px] sm:w-[27px]"
          />

          <div className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] rounded-full bg-green flex justify-center items-center">
            <h1 className="text-[#ffff] ">A</h1>
          </div>
        </div>
      </div>
      <aside
        ref={sidebarRef}
        className={` flex flex-col items-center  fixed top-[80px]  z-30  left-0 w-[296px] h-full bg-[#FFFF]  transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-100`}
        style={{
          borderRadius: "0px 40px 40px 0px",
        }}
      >
        <div className="flex flex-col  gap-[24px] mt-[61px]">
          {link.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="flex gap-[16px] items-center"
            >
              <Image
                src={item.icon}
                width={23}
                height={23}
                alt=""
                className=""
              />
              <h1
                className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
                  pathname === item.path ? " font-bold" : " font-normal"
                }`}
              >
                {item.post}
              </h1>
            </Link>
          ))}
        </div>
        <div className="mt-auto mb-[130px] ml-[-45px]">
          <Link
            href="/"
            className={`flex gap-[20px] items-center h-[20px] border-l-[1px] `}
          >
            <Image src="/icons/settings.svg" width={23} height={23} alt="" />
            <h1
              className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
                pathname === "/test"
                  ? "text-[#2E3095] font-bold"
                  : "text-[#2E3095] font-normal"
              }`}
            >
              Жөндөө
            </h1>
          </Link>
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex gap-[16px] items-center h-[20px] border-l-[1px] mt-[15px] cursor-pointer"
          >
            <Image src="/icons/exit.svg" width={23} height={23} alt="" />
            <h1 className="lg:text-[20px] text-[14px] xl:text-[22px] md:text-[16px] text-[#2E3095] font-normal">
              Чыгуу
            </h1>
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </aside>
    </div>
  );
};

export default HeaderSearch;
