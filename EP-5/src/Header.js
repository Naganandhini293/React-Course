import AppLogo from "../asset/app-logo.png"
export default  Header = () => {
  return (
    <div className="header-ctr">
      <img src={AppLogo} alt="app-logo" className="app-logo" />
      <div className="nav-ctr">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};