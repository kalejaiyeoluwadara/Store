import React, { useState } from "react";
// import img from "../assets/images/myhome.svg";
function Item({
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
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={`sm:w-[95%] relative sm:h-[120px] h-auto] sm:py-0 py-4  transition  duration-300 ${
        active && "border-l-[5px] border-green-700"
      } w-full flex sm:flex-row flex-col sm:justify-between   rounded-[6px]  items-center px-4 shadow-md hover:border-l-[5px] hover:border-green-700 bg-gray-200 `}
    >
      {/* Subisdary first div */}
      <div className="flex w-full sm:flex-row flex-col items-center gap-1">
        {/* image */}
        <div>
          <img
            src={logo}
            className="h-[50px] sm:relative sm:mr-4 sm:top-0 sm:bottom-0 absolute left-6 -top-6 w-[50px] rounded-[50%] bg-black "
            alt=""
          />
        </div>
        {/* Middle content */}

        {/* Main div */}
        <div className="flex sm:mt-0  mt-8 ml-4 sm:justify-normal sm:w-auto w-full flex-col">
          {/* Company first section  */}
          <section className="flex mb-1 items-center gap-3">
            <p className="font-[600] text-green-600 ">{company}</p>
            {isNew && <NewP type={"New!"} />}
            {featured && <NewP type={"Premium"} />}
          </section>
          {/* Title section */}
          <section>
            <h3 className="font-[600] text-[16px] ">{position} </h3>
          </section>

          {/* Details section  */}
          <section className="flex w-full sm:mt-0 mt-3 sm:mb-0 mb-1 font-normal text-gray-600 gap-3">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </section>
        </div>
      </div>

      {/* Languages */}
      <div className="flex sm:mt-o relative px-2  flex-wrap mt-6 sm:justify-end sm:w-full w-full justify-start sm:gap-2 gap-4 ">
        <div className="w-full sm:hidden visible   absolute -top-4  h-10 ">
          <hr className="bg-gray-400 w-full h-[3px] " />
        </div>
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
const [active, setActive] = useState(false);
const Box = ({ props }) => {
  return (
    <div
      onClick={() => {
        setActive(true);
      }}
      className={`sm:px-2 sm:py-1 px-3 py-[10px] transition duration-300 font-[600] cursor-pointer flex items-center justify-center  ${
        !active ? "bg text-green-700" : "bg-green-600 text-white"
      } hover:bg-green-600 hover:text-white rounded-[8px] `}
    >
      <p>{active}</p>
    </div>
  );
};
const NewP = ({ type }) => {
  return (
    <div
      className={` text-white uppercase text-[11px] flex items-center justify-center px-3 font-[600] py-[2px] rounded-[15px] ${
        type === "New!" ? "bg-green-800" : "bg-black "
      }`}
    >
      <p>{type}</p>
    </div>
  );
};
