import { SideBar } from "./SideBar/SideBar";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main-window">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="content">MAIN</div>
    </div>
  );
};
