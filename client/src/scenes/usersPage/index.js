import { useState, useEffect, useContext } from "react";

import "./index.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";
import { globalContext } from "../../App";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [presentedData, setPresentedData] = useState(usersData);
  const [institutionsData, setInstitutionsData] = useState(null);
  const { token, handleExpiredToken } = useContext(globalContext);

  useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUsersData(resJson);
        setPresentedData(resJson);
        console.log(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/institutions`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setInstitutionsData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  return (
    <div className="database">
      <h1>Users database</h1>
      <Searchbar
        usersData={usersData}
        setPresentedData={setPresentedData}
        institutionsData={institutionsData}
      />
      <DataBaseContainer presentedData={presentedData} />
    </div>
  );
}

export default UsersPage;
