import "./Toolbar.css";
import Icons from "./Icons/Icons";
import { globalContext } from "../../App";
import { useContext } from "react";

const Toolbar = () => {
  const { signedUserId, token, handleExpiredToken } = useContext(globalContext);
  const handleLogout = () => {
    handleExpiredToken();
  };

  return (
    <div className="toolbar">
      <div className="toolbar-logo">
        <img
          className="toolbar-logo-img"
          src="/assets/white-logo.png"
          alt="Moshal Logo"
        />
      </div>
      {/* If user is logged in, show the icons */}
      {token && (
        <Icons
          signedUserId={signedUserId}
          className="toolbar-icons"
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default Toolbar;
