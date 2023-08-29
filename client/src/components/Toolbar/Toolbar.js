import "./Toolbar.css";
import Icons from "./Icons/Icons";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <img
        className="toolbar-logo-img"
        src="assets/512logo.png"
        alt="Moshal Logo"
      />
      <Icons className="toolbar-icons" />
    </div>
  );
};

export default Toolbar