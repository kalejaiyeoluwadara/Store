import React from "react";
import Item from "./Item";
import data from "../../data.json";
function Content() {
  return (
    <div className="p-10 flex items-center justify-center flex-col gap-5 ">
      {data.map((item) => {
        const { id, company, logo } = item;
        return <Item company={company} logo={logo} />;
      })}
    </div>
  );
}

export default Content;
