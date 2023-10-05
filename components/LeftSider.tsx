import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LeftSider() {
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
    <div className="w-full lg:w-3/12 rounded-2xl p-6 bg-stone-50 dark:bg-stone-800">
      <h2 className="text-xl font-bold">
        <Link href="/temes">Alfr9 Almocharika</Link>
      </h2>
      <div className="mt-4">
        <ul className="flex flex-col">
          {alfr9Almocharika.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 text-md p-2 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 hover:shadow-md cursor-pointer"
            >
              <Image src={item.img} width={15} height={15} alt={item.title} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
