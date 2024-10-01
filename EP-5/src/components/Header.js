import { Link } from "react-router-dom";
import AppLogo from "../../asset/app-logo.png"
export default  Header = () => {
  return (
    <div className="header-ctr">
      <img src={AppLogo} alt="app-logo" className="app-logo" />
      <div className="nav-ctr">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};