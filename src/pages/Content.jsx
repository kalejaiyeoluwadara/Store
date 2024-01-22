import React from "react";
import Item from "./Item";
import data from "../../data.json";
import { useGlobal } from "../context";

function Content() {
  const { filters } = useGlobal();
  return (
    <div className="p-10 flex mt-10 items-center justify-center flex-col sm:gap-5 gap-12 ">
      {data.map((item) => {
        const {
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
          level,
          tools,
        } = item;
        return (
          <>
            {filters.length <= 0 ? (
              <Item
                company={company}
                logo={logo}
                position={position}
                postedAt={postedAt}
                contract={contract}
                languages={languages}
                location={location}
                featured={featured}
                isNew={isNew}
                level={level}
                tools={tools}
              />
            ) : (
              filters.includes((languages) => {
                console.log("yes");
              })
            )}
          </>
        );
      })}
    </div>
  );
}

export default Content;
