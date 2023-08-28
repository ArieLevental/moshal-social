import { useState } from "react";

import "./DataBase.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import SearchBar from "./SearchBar/SearchBar";

function DataBase() {

    const [presentedData, setPresentedData] = useState("")
    
    return (
      <div className="database">
        <h1>Users</h1>
        <SearchBar setPresentedData={setPresentedData}/>
        <DataBaseContainer presentedData={presentedData}/>
      </div>
    );
  }
  
  export default DataBase;
  