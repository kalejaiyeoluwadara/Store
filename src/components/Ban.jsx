import React from "react";
import remove from "../../images/icon-remove.svg";
function Ban({ prop }) {
  return (
    <div className="flex  items-center justify-center  h-[30px] bg-gray-200 text-green-600  rounded-[8px] ">
      <p className="px-2 text-[14px] font-[600] py-1">{prop}</p>
      <p className=" w-[35px] flex items-center justify-center text-white h-full bg-green-500 ">
        <img src={remove} alt="remove" />
      </p>
    </div>
  );
}

export default Ban;
