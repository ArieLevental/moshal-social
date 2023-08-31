import "./Toolbar.css";
import Icons from "./Icons/Icons";
import { globalContext } from "../../App";
import { useContext } from "react";

const Toolbar = () => {
  const [email, setEmail, token, setToken] = useContext(globalContext);
  const handleLogout = async (e) => {
    await fetch("http://localhost:3001/auth/logout", { method: "POST" });
    localStorage.removeItem("token");
    setEmail("");
    setToken("");
  };
  return (
    <div className="toolbar">
      <img
        className="toolbar-logo-img"
        src="assets/512logo.png"
        alt="Moshal Logo"
      />
      <Icons
        className="toolbar-icons"
        token={token}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Toolbar;
