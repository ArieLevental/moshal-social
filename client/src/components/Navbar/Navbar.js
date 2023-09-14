import { Link } from "react-router-dom";
import { useContext } from "react";
import { globalAuthContext } from "../../state/state.js";
import "./Navbar.css";
import Icons from "./Icons/Icons";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
  const {
    setToken,
    setSignedUserData,
    signedUserData,
    token,
    handleExpiredToken,
  } = useContext(globalAuthContext);
  const handleLogout = () => {
    handleExpiredToken(setToken, setSignedUserData);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          className="navbar-logo-img"
          src="/assets/logos/moshal/white-logo.png"
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
