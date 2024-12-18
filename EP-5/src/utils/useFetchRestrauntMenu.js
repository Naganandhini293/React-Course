import { useState, useEffect } from "react";
import { SWIGGY_ITEM_API_URL } from "../utils/constants";

const useFetchRestrauntMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    fetchRestrauntData();
  }, []);

  const fetchRestrauntData = async () => {
    const response = await fetch(SWIGGY_ITEM_API_URL + restaurantId, {
      method: "GET",
    });

    const json = await response.json();
    setRestaurantMenu(json);
  };
  return restaurantMenu;
};

export default useFetchRestrauntMenu;
