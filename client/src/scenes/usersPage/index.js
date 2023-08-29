import { useState, useEffect } from "react";

import "./index.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [presentedData, setPresentedData] = useState(usersData);

  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((res) => res.json())
      .then((jsonData) => {
        setUsersData(jsonData);
        setPresentedData(jsonData);
      });
  }, []); // string "microsoft"

  return (
    <div className="database">
      <h1>Users database</h1>
      <Searchbar usersData={usersData} setPresentedData={setPresentedData} />
      <DataBaseContainer presentedData={presentedData} />
    </div>
  );
}

export default UsersPage;
