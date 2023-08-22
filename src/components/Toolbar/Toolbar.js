import "./Toolbar.css";
import companyLogo from "../../assets/512logo.png";
import { Icons } from "./Icons/Icons";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <img className="toolbar-logo-img" src={companyLogo} alt="Moshal logo" />
      <Icons className="toolbar-icons"/>
    </div>
  );
};
