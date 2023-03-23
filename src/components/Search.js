import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constant";
import searchImg from "../assets/search.jpg";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchQueryResult, setSearchQueryResult] = useState([]);
  const [isSuggesionsVisible, setIsSuggesionsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => fetchSearchSuggestions(), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchText);
    const data = await response.json();
    setSearchQueryResult(data[1]);
  };
  return (
    <>
      <div className="flex search-area">
        <div
          className={`p-1 pl-3 w-2/3 border shadow-sm border-gray-400 rounded-l-full font-serif flex`}
        >
          {isSuggesionsVisible && (
            <img className="search-img w-4 mx-1 m-auto" src={searchImg} />
          )}
          <input
            className={`search-input w-full text-xs md:text-base focus:outline-none ${
              isSuggesionsVisible && "pl-3"
            }`}
            type="text"
            name="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setIsSuggesionsVisible(true)}
            onBlur={() => setIsSuggesionsVisible(false)}
          />
        </div>
        <button className="search-button rounded-r-full w-16 h-full border shadow-sm bg-gray-100 hover:bg-gray-200 border-l border-gray-400 ">
          <img className="search-img w-4  md:w-5 m-auto" src={searchImg} />
        </button>
      </div>
     { isSuggesionsVisible && searchQueryResult.length > 0 && <div className="suggestion-box bg-white w-2/3 border shadow-md rounded-xl py-4">
        {searchQueryResult.map((searchText) => {
          return (
            <Link to = {`/results?search_query=${searchText}`}>
              <ul className="suggestion-text bg-white px-3 py-1 flex items-center hover:bg-gray-100 cursor-default">
              <li>
                <img className="w-4 mx-1 m-auto" src={searchImg} />
              </li>
              <li className="pl-3 ">{searchText}</li>
            </ul>
            </Link>
          );
        })}
      </div>}
    </>
    // results?search_query=akshay+saini 
  );
};

export default Search;
