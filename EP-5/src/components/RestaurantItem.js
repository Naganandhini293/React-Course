import { useParams } from "react-router-dom";
import RestarauntCategory from "./RestaurantCategory";
import useFetchRestrauntMenu from "../utils/useFetchRestrauntMenu";
import { useState } from "react";

const RestaurantItem = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    // Custom hook to fetch restaurant menu
    const restaurauntItem = useFetchRestrauntMenu(resId);

    if (restaurauntItem === null) return <div>Loading...</div>;

    const resItem =
        restaurauntItem?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (item) => {
                return (
                    item?.card?.card?.["@type"] ==
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            }
        );

    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {restaurauntItem?.cards?.[2]?.card?.card?.info?.name}
            </h1>
            <ul className="space-y-6">
                {resItem?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md"
                        >
                            <span
                                className="flex justify-between cursor-pointer"
                                onClick={() => setShowIndex(index)}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 mr-2">
                                    {item?.card?.card?.title}
                                </h3>
                                <span>⬇️</span>
                            </span>

                            <RestarauntCategory
                                itemCards={item?.card?.card?.itemCards}
                                key={index}
                                showItem={index == showIndex ? true : false}
                            />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantItem;
