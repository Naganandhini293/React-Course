import React from "react";
import {RESTAURANT_IMAGE_URL} from "./utils/constants"

export default function RestarauntCard(props) {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props?.resData?.info;
  return (
    <div className="restauraunt-ctr">
      <img
        src={
            RESTAURANT_IMAGE_URL +
          cloudinaryImageId
        }
        alt="restauraunt-card"
        className="restauraunt-card"
      />
      <h2>{name}</h2>
      <h4>{avgRating + " Ratings"}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}
