import React from "react";
import Item from "./Item";
import data from "../../data.json";
import { useGlobal } from "../context";

function Content() {
  const { filters } = useGlobal();
  const filteredData = data.filter((item) => {
    if (filters.length === 0) {
      return true; // If no filters are selected, include all items
    }

    // Check if any language in filters array is present in the item's languages
    return filters.some((filter) => item.languages.includes(filter));
  });
  return (
    <div className="p-10 flex mt-10 items-center justify-center flex-col sm:gap-5 gap-12 ">
      {filteredData.map((item) => {
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
          </>
        );
      })}
    </div>
  );
}

export default Content;
