import { useParams } from "react-router-dom";
import useFetchRestrauntMenu from "../utils/useFetchRestrauntMenu";

const RestaurantItem = () => {
  const { resId } = useParams();

  //Custom hook to fetch restaraunt menu
  const restaurauntItem = useFetchRestrauntMenu(resId);

  if (restaurauntItem === null) return <div>Loading..</div>;

  const resItem =
    restaurauntItem?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[2]?.card?.card?.itemCards;

  return (
    <div>
      <h1>{restaurauntItem?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <ul>
        {resItem?.map((item) => {
          return (
            <li>
              {item?.card?.info?.name} - {item?.card?.info?.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantItem;
