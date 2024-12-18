import { Link } from "react-router-dom";
import AppLogo from "../../asset/app-logo.png"
import useOnlineStatus from "../utils/useOnlineStatus";

export default  Header = () => {
  const OnlineStatus = useOnlineStatus()
  return (
    <div className="header-ctr">
      <img src={AppLogo} alt="app-logo" className="app-logo" />
      <div className="nav-ctr">
        <ul>
          <li>Online Status: {OnlineStatus ? 'Online' : 'Offline'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};