"use client";
import React, { useState } from "react";

function AddTeme() {
  const [nPlayer, setnPlayer] = useState(6);
  const handelChangePlayer = (e: any) => {
    setnPlayer(e.target.value);
  };
  return (
    <div className="bg-stone-100 dark:bg-stone-900 ">
      <div className="container p-10">
        <div className="w-10/12 m-auto p-8  lg:w-96 rounded-md shadow-lg bg-stone-50 dark:bg-stone-800">
          <form className="flex flex-col gap-4" action="">
            <div className=" flex flex-col gap-1 rounded-md">
              <label htmlFor="">ISM ALFARI9</label>
              <input
                className="w-full p-2 rounded-md"
                type="text"
                placeholder="Ism Alfri9"
              />
            </div>
            <div className=" flex flex-col gap-1 rounded-md">
              <label htmlFor="">
                3ADD AL3IBIN: <span>{nPlayer}</span>
              </label>
              <input
                type="range"
                name=""
                id=""
                min={6}
                max={12}
                onChange={handelChangePlayer}
              />
            </div>
            <button className="w-fit p-3 rounded-sm m-auto mt-6 text-stone-900 bg-yellow-400">
              IDAFT FARI9
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTeme;
