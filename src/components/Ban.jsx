import React from "react";
import remove from "../../images/icon-remove.svg";
import { useGlobal } from "../context";
function Ban({ prop }) {
  const { filters, SetFilters } = useGlobal();
  const handleRemoveFilter = () => {
    const updatedFilters = filters.filter((filter) => filter !== prop);
    SetFilters(updatedFilters);
  };
  return (
    <div className="flex cursor-pointer items-center justify-center  h-[30px] bg-gray-200 text-green-600  rounded-[8px] ">
      <p className="px-2 text-[14px] font-[600] py-1">{prop}</p>
      <p className=" w-[35px] flex items-center justify-center text-white h-full bg-green-500 ">
        <img onClick={handleRemoveFilter} src={remove} alt="remove" />
      </p>
    </div>
  );
}

export default Ban;
