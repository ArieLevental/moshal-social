import "./Toolbar.css";
import Icons from "./Icons/Icons";
import { globalContext } from "../../App";
import { useContext } from "react";

const Toolbar = () => {
  const [email, setEmail, token, setToken, handleExpiredToken] = useContext(globalContext);

  const handleLogout = () => {
    handleExpiredToken()
  };

  return (
    <div className="toolbar">
      <img
        className="toolbar-logo"
        src="assets/512logo.png"
        alt="Moshal Logo"
      />
      {token && (
        <Icons
          className="toolbar-icons"
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default Toolbar;
