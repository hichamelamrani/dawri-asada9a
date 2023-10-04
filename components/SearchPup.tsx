"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchPup({
  handleEnibleSeachBar,
  enibleSerchBar,
}: {
  handleEnibleSeachBar: () => void;
  enibleSerchBar: boolean;
}) {
  const [serchValue, setSerchValue] = useState("");
  const alfr9Almocharika = [
    { title: "It7ad Sifa", id: "0", img: "/images/1.png" },
    { title: "A Chabab", id: "1", img: "/images/2.png" },
    { title: "Achbal As7ra", id: "2", img: "/images/3.png" },
    { title: "Alwafidon Aljdod", id: "3", img: "/images/4.png" },
    { title: "Mo7tarify Albotola", id: "4", img: "/images/5.png" },
    { title: "AL Anamil", id: "5", img: "/images/6.png" },
    { title: "Almoratbin", id: "6", img: "/images/7.png" },
    { title: "Al9odma", id: "7", img: "/images/8.png" },
    { title: "Mo7aribo As7ra", id: "8", img: "/images/9.png" },
  ];
  return (
    <div
      className={`${
        enibleSerchBar ? "visible" : "hidden"
      }    absolute w-full top-0 left-0 p-3 rounded-2xl shadow-lg bg-stone-100 dark:bg-stone-800`}
    >
      <span
        className="absolute right-2 w-6 h-6 flex justify-center items-center rounded-full bg-red-300"
        onClick={handleEnibleSeachBar}
      >
        X
      </span>
      <div className=" p-3 flex justify-between items-center gap-3">
        <label htmlFor="serch">
          <BiSearch size={24} />
        </label>
        <input
          className="w-full bg-transparent outline-none"
          id="serch"
          type="text"
          placeholder="Ad5l ma trid alba7s 3anh"
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}
        />
      </div>
      <div>
        <p className="w-full p-2 rounded-md text-stone-400 bg-stone-200 dark:bg-stone-700">
          Foro9
        </p>
        {serchValue == ""
          ? ""
          : alfr9Almocharika
              .filter((item) =>
                item.title.toLowerCase().includes(serchValue.toLowerCase())
              )
              .map((item) => {
                return (
                  <div className="flex items-center p-3 gap-3" key={item.id}>
                    <Image
                      src={item.img}
                      width={20}
                      height={20}
                      alt="alfr9 almocharika"
                    />

                    <span className="text-stone-500">{item.title}</span>
                  </div>
                );
              })}
        <p className="w-full p-2 rounded-md text-stone-400 bg-stone-200 dark:bg-stone-700">
          La3bin
        </p>
      </div>
    </div>
  );
}
