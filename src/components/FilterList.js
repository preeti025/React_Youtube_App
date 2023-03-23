import React from "react";

const FilterList = () => {
  const list = [
    "All",
    "Music",
    "HTML",
    "JavaScript",
    "React",
    "Angular",
    "News",
    "Live",
      "Movies",
      "Video Songs",
      "Bhakti Songs",
      "Hollywood Movies",
  ];
  return list.map((item, index) => {
    return (
      <button
        key={index}
        className="filter-list-item px-3 py-1.5 text-xs lg:py-2 lg:text-sm  bg-gray-200 hover:bg-gray-300 rounded-lg mx-1.5"
      >
        {item}
      </button>
    );
  });
};

export default FilterList;
