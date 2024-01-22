import React from "react";
import Ban from "./Ban";
import { useGlobal } from "../context";

function Banner() {
  const { filters, SetFilters } = useGlobal();
  return (
    <div className="absolute top-20  flex items-center justify-center w-screen ">
      <section className="w-[80%] py-4 flex items-center justify-start px-4 z-10 shadow-md bg-white gap-2 h-auto rounded-[4px] ">
        {filters.map((id, d) => {
          return <Ban key={d} prop={id} />;
        })}
      </section>
      <p
        onClick={() => {
          SetFilters([]);
        }}
        className="text-green-600"
      >
        clear
      </p>
    </div>
  );
}

export default Banner;
