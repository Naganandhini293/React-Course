import React from "react";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";

export default function RestarauntCard(props) {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
        props?.resData?.info;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-64 h-80">
            {/* Image */}
            <img
                src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
                alt="restaurant-card"
                className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4 h-full flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                    {name}
                </h2>
                <h4 className="text-sm text-gray-500 mb-1">
                    {avgRating} Ratings
                </h4>
                <h4 className="text-sm text-gray-600 mb-1">
                    {cuisines.join(", ")}
                </h4>
                <h4 className="text-sm text-gray-600">{costForTwo}</h4>
            </div>
        </div>
    );
}
