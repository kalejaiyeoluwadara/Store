import React from "react";

function Item({ company, logo }) {
  return (
    <div className="w-[95%] flex justify-between  h-[120px] rounded-[4px]  items-center px-4 shadow-md bg-gray-200 ">
      {/* Subisdary first div */}
      <div className="flex items-center gap-1">
        {/* image */}
        <div>
          <img
            src={logo}
            className="h-[50px] w-[50px] rounded-[50%] bg-black "
            alt=""
          />
        </div>
        {/* Middle content */}

        {/* Main div */}
        <div className="flex ml-4 flex-col">
          {/* Company first section  */}
          <section className="flex mb-1 items-center gap-3">
            <p className="font-[600] text-green-600 ">{company}</p>
            <NewP type={"New"} />
            <NewP type={"Premium"} />
          </section>
          {/* Title section */}
          <section>
            <h3 className="font-[600] text-[16px] ">FrontEnd dev</h3>
          </section>

          {/* Details section  */}
          <section className="flex font-normal text-gray-600 gap-3">
            <span>1day ago</span>
            <span>Part time</span>
            <span>USA only</span>
          </section>
        </div>
      </div>

      {/* Languages */}
      <div className="flex gap-2">
        {["HTML", "CSS"].map((prop) => {
          return <Box props={prop} />;
        })}
      </div>
    </div>
  );
}

export default Item;
// language box
const Box = ({ props }) => {
  return (
    <div className="">
      <p>{props}</p>
    </div>
  );
};
const NewP = ({ type }) => {
  return (
    <div
      className={` text-white text-[11px] flex items-center justify-center px-3 py-[2px] rounded-[15px] ${
        type === "New" ? "bg-green-700" : "bg-black "
      }`}
    >
      <p>{type}</p>
    </div>
  );
};
