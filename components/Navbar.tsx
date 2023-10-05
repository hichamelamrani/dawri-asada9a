"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SearchPup from "./SearchPup";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [enibleSerchBar, setenibleSerchBar] = useState(false);
  const handleEnibleSeachBar = () => {
    setenibleSerchBar(!enibleSerchBar);
  };
  const navMenu = [
    {
      name: "A5bar",
      link: "/a5bar",
    },

    {
      name: "Tasjil Fari9",
      link: "/tasjil-fari9",
    },
    {
      name: "Tawasl Ma3ana",
      link: "/tawasl-ma3ana",
    },
  ];
  return (
    <header className="h-18 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link href={"/"} className="flex items-center gap-1 text-2xl font-bold">
          <Image
            src={"/images/logo.png"}
            width={20}
            height={20}
            alt="Logo"
          ></Image>
          <h2>
            DAWRI <span className="text-yellow-400">ASADA9A</span>
          </h2>
        </Link>
        <div className="hidden lg:flex relative cursor-pointer w-2/5 rounded-2xl bg-stone-100 dark:bg-stone-800">
          <SearchPup
            handleEnibleSeachBar={handleEnibleSeachBar}
            enibleSerchBar={enibleSerchBar}
          />
          <div
            className="p-3 flex items-center gap-3"
            onClick={handleEnibleSeachBar}
          >
            <BiSearch size={24} />
            <p className="text-stone-500">Ad5l ma trid alba7s 3anh</p>
          </div>
        </div>
        <nav className="relative">
          <ul className="hidden lg:flex gap-2 items-center">
            {navMenu.map((item, index) => {
              return (
                <li
                  className="p-1 rounded-sm hover:bg-stone-100 dark:hover:bg-stone-700"
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
            <li className="ml-4">
              <ThemeSwitcher />
            </li>
          </ul>
          <div className="lg:hidden">
            <span
              onClick={() => setShowMenu(!showMenu)}
              className=" flex items-center font-bold text-2xl cursor-pointer"
            >
              <span className="hidden md:visible">Menu</span> <HiMenu />
            </span>

            <ul
              className={`${
                showMenu ? "visible" : "hidden"
              } " absolute right-0 top-20 w-48 p-3 flex flex-col items-left bg-stone-50 dark:bg-stone-900 rounded-md shadow-md "`}
            >
              {navMenu.map((item, index) => {
                return (
                  <li
                    className="p-1 font-bold rounded-sm hover:bg-stone-100 dark:hover:bg-stone-700"
                    key={index}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                );
              })}
              <li className="">
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
