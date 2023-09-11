import { Link } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "../../App";
import "./Navbar.css";
import Icons from "./Icons/Icons";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
  const { signedUserData, token, handleExpiredToken } =
    useContext(globalContext);
  const handleLogout = () => {
    handleExpiredToken();
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          className="navbar-logo-img"
          src="/assets/white-logo.png"
          alt="Moshal Logo"
        />
      </Link>

      {/* If user is logged in, show the icons */}
      {token && (
        <>
          <Navigation />
          <Icons
            signedUserId={signedUserData._id}
            singedUserPicturePath={signedUserData.picturePath}
            className="navbar-icons"
            handleLogout={handleLogout}
          />
        </>
      )}
    </div>
  );
};

export default Navbar;
