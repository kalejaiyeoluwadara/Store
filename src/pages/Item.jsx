import React from "react";

function Item({ company, logo }) {
  return (
    <div className="w-[95%] h-[80px] rounded-[4px] flex items-center px-4 shadow-md bg-gray-200 ">
      <img src={logo} alt="" />
      <p>{company}</p>
    </div>
  );
}

export default Item;
