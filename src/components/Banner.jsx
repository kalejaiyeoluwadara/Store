import React from "react";
import Ban from "./Ban";

function Banner() {
  return (
    <div className="absolute top-20  flex items-center justify-center w-screen ">
      <section className="w-[80%] flex items-center justify-start px-4 z-10 shadow-md bg-white h-[9vh] rounded-[4px] ">
        <Ban />
      </section>
    </div>
  );
}

export default Banner;
