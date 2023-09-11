import "./Navbar.css";
import Icons from "./Icons/Icons";
import Navigation from "./Navigation/Navigation";
import { globalContext } from "../../App";
import { useContext } from "react";

const Navbar = () => {
  const { signedUserId, token, handleExpiredToken } = useContext(globalContext);
  const handleLogout = () => {
    handleExpiredToken();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          className="navbar-logo-img"
          src="/assets/white-logo.png"
          alt="Moshal Logo"
        />
      </div>
      {/* If user is logged in, show the icons */}
      {token && (
        <>
        <Navigation />
        <Icons
          signedUserId={signedUserId}
          className="navbar-icons"
          handleLogout={handleLogout}
        />
        </>
      )}
    </div>
  );
};

export default Navbar;
