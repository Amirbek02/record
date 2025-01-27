'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Сынамык тест', href: '/exam-test' },
  { label: 'Видео сабак', href: '/#videoLessons' },
  { label: 'Биз жөнүндө', href: '/#' },
];

const link = [
  {
    path: '/',
    icon: '/icons/home.svg',
    post: 'Башкы бет',
  },
  {
    path: '/exam-test',
    icon: '/icons/test.svg',
    post: 'Тест',
  },
  {
    path: '/#videoLessons',
    icon: '/icons/pc.svg',
    post: 'Видео сабак',
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="max-w-[1440px] w-[90%] flex items-center justify-center md:justify-between pt-[25px] pb-[9px] mx-[auto] ">
      <div className="flex justify-between w-full md:w-[160px]">
        <div className="flex flex-col items-center order-2">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt=""
              width={166}
              height={61}
              className="w-[105px] h-[31px] md:w-[130px] md:h-[40px] lg:w-[166px] lg:h-[61px]"
            />
          </Link>
          <h1 className="text-[3px] font-montserrat font-black text-[#2F2F99] lg:text-[6px]">
            Аналитикалык жана билим берүү уюму
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-between  md:hidden order-1">
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button type="button" onClick={toggleSidebar}>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
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
      </div>
      <div className="md:hidden ">
        <aside
          ref={sidebarRef}
          className={` flex flex-col items-center fixed top-[80px] left-0 w-[296px] h-full bg-[#FFFF]  transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 z-100`}
          style={{
            borderRadius: '0px 40px 40px 0px',
            boxShadow: ' 10px 4px 4px 0px rgba(229, 229, 255, 0.54)',
          }}>
          <div className="flex flex-col gap-[24px] mt-[61px]">
            {link.map((item, index) => (
              <Link href={item.path} key={index} className="flex gap-[16px] items-center">
                <Image src={item.icon} width={23} height={23} alt="" className="" />
                <h1
                  className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
                    pathname === item.path
                      ? 'text-[#2E3095] font-bold'
                      : 'text-[#2E3095] font-normal'
                  }`}>
                  {item.post}
                </h1>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <nav className="font-montserrat hidden items-center lg:gap-[40px] xl:gap-[55px] md:gap-[30px] md:flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
              pathname === link.href ? 'text-[#2E3095] font-bold' : 'text-[#252641] font-normal'
            }`}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="hidden gap-[12px] md:flex">
        <Link href="/sign-in">
          <button className="md:py-[10px] md:px-[13px]  lg:pt-[14.93px] lg:pb-[15.87px] lg:pl-[31px] lg:pr-[25px] font-medium text-[16px] lg:text-[22px] border-[1.5px] border-[black]  rounded-[80px] text-[#6C6C6C]">
            Кирүү
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="md:py-[10px] md:px-[13px]  lg:pt-[14.93px] lg:pb-[15.87px] lg:pl-[31px] lg:pr-[25px] font-medium text-[16px] lg:text-[22px]  rounded-[80px] bg-[#2E3095] text-[#fff]">
            Катталуу
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
