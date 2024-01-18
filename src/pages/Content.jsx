import React from "react";
import Item from "./Item";
import data from "../../data.json";
function Content() {
  return (
    <div className="p-10 flex items-center justify-center flex-col sm:gap-5 gap-12 ">
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
        );
      })}
    </div>
  );
}

export default Content;
