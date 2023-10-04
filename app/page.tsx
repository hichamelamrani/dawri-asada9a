import LeftSider from "@/components/LeftSider";
import RieghtSider from "@/components/RieghtSider";
import Image from "next/image";

export default function Home() {
  const alfr9Almocharika = [
    {
      f1: " It7ad Sifa",
      id1: "0",
      img1: "/images/1.png",
      f2: "A Chabab",
      id2: "0",
      img2: "/images/2.png",
    },
    {
      f1: " It7ad Sifa",
      id1: "0",
      img1: "/images/1.png",
      f2: "A Chabab",
      id2: "0",
      img2: "/images/2.png",
    },
    {
      f1: " It7ad Sifa",
      id1: "0",
      img1: "/images/1.png",
      f2: "A Chabab",
      id2: "0",
      img2: "/images/2.png",
    },
    {
      f1: " It7ad Sifa",
      id1: "0",
      img1: "/images/1.png",
      f2: "A Chabab",
      id2: "0",
      img2: "/images/2.png",
    },
  ];
  return (
    <div className="bg-stone-100 dark:bg-stone-900 ">
      <div className="container m-auto p-6 flex flex-col lg:flex-row justify-between gap-6 ">
        <LeftSider />
        <main className="w-full lg:w-6/12 rounded-2xl p-6 bg-stone-50 dark:bg-stone-800">
          <h2 className="mb-3 text-2xl font-bold">Taw9it Al Mobariat</h2>
          <h3 className="w-full p-2 rounded-md bg-stone-100 dark:bg-stone-700">
            Liwm
          </h3>
          <div>
            <ul className="flex flex-col items-center pt-3 pb-3 gap-4">
              {alfr9Almocharika.map((item) => (
                <li
                  key={item.id1}
                  className="  w-full flex justify-evenly items-center gap-2 p-2 rounded-md bg-stone-50 dark:bg-stone-800 dark:hover:bg-stone-700 hover:shadow-sm cursor-pointer"
                >
                  <div className="flex items-center gap-1">
                    <p className="">{item.f1}</p>
                    <Image
                      src={item.img1}
                      width={15}
                      height={15}
                      alt="Picture of the author"
                    />
                  </div>
                  <span className=" px-2 py-1 text-sm flex items-center justify-center bg-stone-200 dark:bg-stone-700 rounded-full ">
                    12:30 PM
                  </span>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.img2}
                      width={15}
                      height={15}
                      alt="Picture of the author"
                    />
                    <p className="">{item.f2}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="w-full p-2 bg-stone-100 rounded-md dark:bg-stone-700">
            Al4ad
          </h3>
          <div>
            <ul className="flex flex-col items-center pt-3 pb-3 gap-4">
              {alfr9Almocharika.map((item) => (
                <li
                  key={item.id1}
                  className="  w-full flex justify-evenly items-center gap-2 p-2 rounded-md bg-stone-50 dark:bg-stone-800 dark:hover:bg-stone-700 hover:shadow-sm cursor-pointer"
                >
                  <div className="flex items-center gap-1">
                    <p className="">{item.f1}</p>
                    <Image
                      src={item.img1}
                      width={15}
                      height={15}
                      alt="Picture of the author"
                    />
                  </div>
                  <span className=" px-2 py-1 text-sm flex items-center justify-center bg-stone-200 dark:bg-stone-700 rounded-full ">
                    12:30 PM
                  </span>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.img2}
                      width={15}
                      height={15}
                      alt="Picture of the author"
                    />
                    <p className="">{item.f2}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <RieghtSider />
      </div>
    </div>
  );
}
