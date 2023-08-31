import { useState, useEffect, useContext } from "react";

import "./index.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";
import { globalContext } from "../../App";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [presentedData, setPresentedData] = useState(usersData);
  const [email, setEmail, token, setToken] = useContext(globalContext);

  // headers: { Authorization: `Bearer ${token}` },

  useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
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
