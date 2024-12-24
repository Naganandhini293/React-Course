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

        // Optional chaining
        const restaurants =
            json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

        setRestaurauntData(restaurants);
        setFilteredRestrauntData(restaurants);
    };

    return (
        <div className="p-4">
            {/* Search and Filter Section */}
            <div className="mb-6 flex flex-col lg:flex-row items-center justify-between">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => {
                        const filteredrestaurauntData = restaurauntData.filter(
                            (data) => data?.info?.avgRating > 4
                        );
                        setFilteredRestrauntData(filteredrestaurauntData);
                    }}
                >
                    Top Restaurants
                </button>
                <div className="flex items-center mt-4 lg:mt-0">
                    <input
                        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600"
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

            {/* Restaurant List Section */}
            <div className="flex flex-wrap gap-6 justify-center">
                {filteredRestrauntData.map((data) => (
                    <Link
                        key={data?.info.id}
                        to={`/restaurant/${data?.info.id}`}
                        className="hover:scale-105 transform transition duration-300"
                    >
                        <RestarauntCard resData={data} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
