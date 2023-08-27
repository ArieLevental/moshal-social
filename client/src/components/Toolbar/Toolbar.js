import "./Toolbar.css";
import { Icons } from "./Icons/Icons";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <img className="toolbar-logo-img" src="assets/512logo.png" alt="Moshal logo" />
      <Icons className="toolbar-icons"/>
    </div>
  );
};
