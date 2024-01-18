import React from "react";
// import img from "../assets/images/myhome.svg";
function MItem({
  id,
  company,
  logo,
  position,
  postedAt,
  contract,
  location,
  languages,
  featured,
  isNew,
  tools,
  level,
}) {
  return (
    <div className="sm:w-[95%] w-full flex justify-between  h-[120px] rounded-[4px]  items-center px-4 shadow-md bg-gray-200 ">
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
            {isNew && <NewP type={"New"} />}
            {featured && <NewP type={"Premium"} />}
          </section>
          {/* Title section */}
          <section>
            <h3 className="font-[600] text-[16px] ">{position} </h3>
          </section>

          {/* Details section  */}
          <section className="flex font-normal text-gray-600 gap-3">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </section>
        </div>
      </div>

      {/* Languages */}
      <div className="flex gap-2">
        {languages.map((prop) => {
          return <Box props={prop} />;
        })}
        {tools.map((prop) => {
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
    <div className="px-2 py-1 bg-green-500 bg-opacity-25 flex items-center justify-center text-green-700 rounded-[3px] ">
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
