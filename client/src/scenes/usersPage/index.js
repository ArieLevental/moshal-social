import { useState, useEffect, useContext } from "react";

import "./index.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";
import { globalContext } from "../../App";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [presentedData, setPresentedData] = useState(usersData);
  const [email, setEmail, token, setToken, handleExpiredToken] =
    useContext(globalContext);

  useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUsersData(resJson);
        setPresentedData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
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
