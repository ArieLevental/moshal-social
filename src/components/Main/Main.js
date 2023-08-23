import { SideBar } from "./SideBar/SideBar";
import DataBase from "./DataBase/DataBase";
import { useState, useEffect } from "react";
import "./Main.css";

export const Main = () => {
  const [mainMode, setMainMode] = useState(1);
  return (
    <div className="main-window">
      <div className="side-bar">
        <SideBar mainMode={mainMode} setMainMode={setMainMode}/>
      </div>
      <div className="content">
        {mainMode === 1 && <div><DataBase /></div>}
        {mainMode === 2 && <div>MainMode 1</div>}
        {mainMode === 3 && <div>MainMode 2</div>}
        
      </div>
    </div>
  );
};
