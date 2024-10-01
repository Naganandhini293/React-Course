import { useEffect, useState } from "react"; 
import { SWIGGY_ITEM_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestaurantItem = () =>{
    const [restaurauntItem, setRestaurauntItem] = useState(null);
    const {resId}  = useParams()

    useEffect(()=>{
        fetchRestrauntData()
    }, [])

    const fetchRestrauntData = async () => {
        const response = await fetch(SWIGGY_ITEM_API_URL + resId, {
          method: "GET",
        });
    
        const json = await response.json();
        setRestaurauntItem(json)
    };
    
    if(restaurauntItem === null) return <div>Loading..</div>

    const resItem = restaurauntItem?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    return (
        <div>
            
            <h1>{restaurauntItem?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <ul>
            {
                resItem?.map((item) =>{
    
                return <li>{item?.card?.info?.name} - {item?.card?.info?.price}</li>

                })
            } 
            </ul>
        </div>
    )

}

export default RestaurantItem;