import { Link } from "react-router-dom";
import AppLogo from "../../asset/app-logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const OnlineStatus = useOnlineStatus();

    /* Consuming context data in functional  based component */
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        //Setting  the context data
        setUserName("Naganandhini S");
    }, []);

    const cartCount = useSelector((store) => store.cart.items);
    console.log(cartCount);

    return (
        <header className="flex justify-between items-center p-4 bg-customBlue shadow-lg">
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    src={AppLogo}
                    alt="app-logo"
                    className="h-12 w-auto mr-4"
                />
                <span className="text-white text-xl font-bold">MyApp</span>
            </div>

            {/* Navigation Section */}
            <nav className="text-white">
                <ul className="flex space-x-6">
                    <li className="text-sm">
                        Online Status:{" "}
                        <span
                            className={
                                OnlineStatus ? "text-green-300" : "text-red-300"
                            }
                        >
                            {OnlineStatus ? "Online" : "Offline"}
                        </span>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-200">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-gray-200">
                            Cart ({cartCount.length})
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-gray-200">
                            Grocery
                        </Link>
                    </li>
                    <li>
                        <span>Logged In User: {loggedInUser}</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
