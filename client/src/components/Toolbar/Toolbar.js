import "./Toolbar.css";
import Icons from "./Icons/Icons";
import { globalContext } from "../../App";
import { useContext } from "react";

const Toolbar = () => {
  const [email, setEmail, token, setToken] = useContext(globalContext);

  const handleLogout = async (e) => {
    await fetch("http://localhost:3001/auth/logout", { method: "POST" });
    // TODO: Need to check if the response is ok
    localStorage.removeItem("token");
    setEmail("");
    setToken("");
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
