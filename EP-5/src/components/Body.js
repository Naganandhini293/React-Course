import React, { useEffect, useState } from "react";

import RestarauntCard from "./RestarauntCard";

import { SWIGGIY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function () {
  const [restaurauntData, setRestaurauntData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestrauntData, setFilteredRestrauntData] = useState([]);

  useEffect(() => {
    fetchRestrauntData();
  }, []);

  const fetchRestrauntData = async () => {
    const response = await fetch(SWIGGIY_API_URL, {
      method: "GET",
    });

    const json = await response.json();

    //Optional chaining
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurauntData(restaurants);
    setFilteredRestrauntData(restaurants);
  };
  return (
    <div className="main-ctr">
      <div>
        <button
          onClick={() => {
            const filteredrestaurauntData = restaurauntData.filter(
              (data) => data?.info?.avgRating > 4
            );
            setRestaurauntData(filteredrestaurauntData);
          }}
        >
          Top Restaurant
        </button>
        <div className="search-ctr">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const temp = restaurauntData.filter((data) =>
                data?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestrauntData(temp);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="restauraunt-list-ctr">
        {filteredRestrauntData.map((data) => {
          return <Link to={`/restaurant/${data?.info.id}`}>
          <RestarauntCard key={data?.info.id} resData={data} />
        </Link>
        
        })}
      </div>
    </div>
  );
}
