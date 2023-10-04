import Image from "next/image";
import React from "react";

export default function RieghtSider() {
  const alfr9Almocharika = [
    {
      title: "It7ad Sifa",
      id: "0",
      img: "/images/1.png",
      g: "1",

      info: {
        l: "2",
        f: "1",
        kh: "1",
        t: "0",
        pt: "4",
      },
    },
    {
      title: "A Chabab",
      id: "1",
      img: "/images/2.png",
      g: "1",

      info: {
        l: "2",
        f: "2",
        kh: "0",
        t: "0",
        pt: "6",
      },
    },
    {
      title: "Achbal As7ra",
      id: "2",
      img: "/images/3.png",
      g: "1",

      info: {
        l: "2",
        f: "0",
        kh: "2",
        t: "0",
        pt: "0",
      },
    },
    {
      title: "Alwafidon Aljdod",
      id: "3",
      img: "/images/4.png",
      g: "2",

      info: {
        l: "2",
        f: "0",
        kh: "1",
        t: "1",
        pt: "1",
      },
    },
    {
      title: "Mo7tarify Albotola",
      id: "4",
      img: "/images/5.png",
      g: "2",
      info: {
        l: "2",
        f: "1",
        kh: "1",
        t: "0",
        pt: "3",
      },
    },
    {
      title: "AL Anamil",
      id: "5",
      img: "/images/6.png",
      g: "2",
      info: {
        l: "2",
        f: "2",
        kh: "0",
        t: "0",
        pt: "6",
      },
    },
    {
      title: "Almoratbin",
      id: "6",
      img: "/images/7.png",
      g: "3",
      info: {
        l: "2",
        f: "1",
        kh: "0",
        t: "1",
        pt: "4",
      },
    },
    {
      title: "Mo7aribo As7ra",
      id: "8",
      img: "/images/9.png",
      g: "3",
      info: {
        l: "2",
        f: "0",
        kh: "0",
        t: "1",
        pt: "1",
      },
    },
    {
      title: "Al9odma",
      id: "7",
      img: "/images/8.png",
      g: "3",
      info: {
        l: "2",
        f: "1",
        kh: "1",
        t: "2",
        pt: "3",
      },
    },
  ];

  return (
    <div className="w-full lg:w-3/12 rounded-2xl p-6 bg-stone-50 dark:bg-stone-800">
      <h2 className="text-xl font-bold">Al Majmo3at</h2>
      <div>
        <h3 className="mt-4 mb-4 text-md font-bold p-2 rounded-md bg-stone-100 dark:bg-stone-700 ">
          Majmo3a 1
        </h3>
        <table className="w-full table-auto">
          <tr className="text-left">
            <th className="w-8/12">Lfr9a</th>
            <th className="">L</th>
            <th className="text-green-600">F</th>
            <th className="text-red-500">KH</th>
            <th className="">T</th>
            <th className="">N</th>
          </tr>
          {alfr9Almocharika
            .filter((item) => item.g === "1")
            .sort((a: any, b: any) => b.info.pt - a.info.pt)
            .map((item) => (
              <tr key={item.id}>
                <td className="flex items-center py-2 gap-2">
                  <Image
                    src={item.img}
                    width={15}
                    height={15}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </td>
                <td>{item.info?.l ?? ""}</td>
                <td>{item.info?.f ?? ""}</td>
                <td>{item.info?.kh ?? ""}</td>
                <td>{item.info?.t ?? ""}</td>
                <td>{item.info?.pt ?? ""}</td>
              </tr>
            ))}
        </table>
      </div>
      <div>
        <h3 className="mt-4 mb-4 text-md font-bold p-2 rounded-md bg-stone-100 dark:bg-stone-700">
          Majmo3a 1
        </h3>
        <table className="w-full table-auto">
          <tr className="text-left">
            <th className="w-8/12">Lfr9a</th>
            <th className="">L</th>
            <th className="text-green-600">F</th>
            <th className="text-red-500">KH</th>
            <th className="">T</th>
            <th className="">N</th>
          </tr>
          {alfr9Almocharika
            .filter((item) => item.g === "2")
            .sort((a: any, b: any) => b.info.pt - a.info.pt)
            .map((item) => (
              <tr key={item.id}>
                <td className="flex items-center py-2 gap-2">
                  <Image
                    src={item.img}
                    width={15}
                    height={15}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </td>
                <td>{item.info?.l ?? ""}</td>
                <td>{item.info?.f ?? ""}</td>
                <td>{item.info?.kh ?? ""}</td>
                <td>{item.info?.t ?? ""}</td>
                <td>{item.info?.pt ?? ""}</td>
              </tr>
            ))}
        </table>
      </div>
      <div>
        <h3 className="mt-4 mb-4 text-md font-bold p-2 rounded-md bg-stone-100 dark:bg-stone-700">
          Majmo3a 1
        </h3>
        <table className="w-full table-auto">
          <tr className="text-left">
            <th className="w-8/12">Lfr9a</th>
            <th className="">L</th>
            <th className="text-green-600">F</th>
            <th className="text-red-500">KH</th>
            <th className="">T</th>
            <th className="">N</th>
          </tr>
          {alfr9Almocharika
            .filter((item) => item.g === "3")
            .sort((a: any, b: any) => b.info.pt - a.info.pt)
            .map((item) => (
              <tr key={item.id}>
                <td className="flex items-center py-2 gap-2">
                  <Image
                    src={item.img}
                    width={15}
                    height={15}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </td>
                <td>{item.info?.l ?? ""}</td>
                <td>{item.info?.f ?? ""}</td>
                <td>{item.info?.kh ?? ""}</td>
                <td>{item.info?.t ?? ""}</td>
                <td>{item.info?.pt ?? ""}</td>
              </tr>
            ))}
        </table>
      </div>
      <h2 className="text-xl font-bold">Tartib Alhadfin</h2>
      <div></div>
    </div>
  );
}
