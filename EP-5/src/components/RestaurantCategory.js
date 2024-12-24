import { addItem } from "../utils/cartSlice";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const RestarauntCategory = ({ itemCards, showItem }) => {
    console.log(showItem);
    const dispatch = useDispatch();
    const handleCart = (item) => {
        dispatch(addItem(item));
    };
    return (
        showItem &&
        itemCards.map((item, index) => {
            return (
                <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between"
                >
                    {/* Item Name and Price */}
                    <div className="flex flex-col items-start mb-2">
                        <span className="text-lg font-semibold text-gray-800">
                            {item?.card?.info?.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            {item?.card?.info?.price
                                ? `₹${item?.card?.info?.price}`
                                : `₹${item?.card?.info?.defaultPrice}`}
                        </span>
                        {/* Item Description */}
                        <span className="text-sm text-start text-gray-600">
                            {item?.card?.info?.description}
                        </span>
                    </div>

                    <div>
                        <button
                            className="bg-black text-white p-1 rounded"
                            onClick={() => {
                                handleCart(item);
                            }}
                        >
                            Add +{" "}
                        </button>
                        <img
                            src={
                                RESTAURANT_IMAGE_URL + item?.card?.info?.imageId
                            }
                            alt="restaurant-card"
                            className="w-32 h-24 object-cover rounded-lg"
                        />
                    </div>
                </div>
            );
        })
    );
};

export default RestarauntCategory;
