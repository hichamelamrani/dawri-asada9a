import React from "react";
import { notFound } from "next/router";

async function getData() {
  const response = await fetch("http://localhost:3000/api/temes", {
    cache: "no-store",
  });
  if (!response.ok) return notFound();
  return response.json();
}

async function page() {
  const data = await getData();
  console.log(data);
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Alfro9 Almocharika</h1>
      <div>
        {data &&
          data.map((teme) => {
            return (
              <div key={teme?.id} className="mb-8">
                <h2 className="text-xl font-bold">{teme?.name}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default page;
