import RestarauntCategory from "./RestaurantCategory";
import { clearCart } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearCartItem = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <h2 className="text-center text-2xl font-bold m-2">Cart</h2>
            <button
                className="bg-red-500 text-center text-white px-4 py-2 rounded shadow hover:bg-red-600"
                onClick={clearCartItem}
            >
                Clear Cart
            </button>
            {cartItem.length == 0 ? (
                <h2 className="text-center text-2xl font-bold m-2">
                    No items in the cart
                </h2>
            ) : (
                <div className="w-8/12 mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow">
                    <RestarauntCategory itemCards={cartItem} showItem={true} />
                </div>
            )}
        </>
    );
};
export default Cart;
