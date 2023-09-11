import { useState, useEffect, useContext } from "react";

import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";
import { globalContext } from "../../App";

function UsersPage() {
  const {
    token,
    handleExpiredToken,
    usersDbData,
    setUsersDbData,
    institutionsData,
    setInstitutionsData,
    companiesData,
    setCompaniesData,
  } = useContext(globalContext);
  // console.log(usersDbData);
  // const [presentedData, setPresentedData] = useState(usersDbData);
  const [presentedData, setPresentedData] = useState(usersDbData);
  // const [usersData, setUsersData] = useState(null);
  // const [institutionsData, setInstitutionsData] = useState(
  //   JSON.parse(localStorage.getItem("institutions_data"))
  // );
  // const [companiesData, setCompaniesData] = useState(
  //   JSON.parse(localStorage.getItem("companies_data"))
  // );

  useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("users_db_data", JSON.stringify(resJson));
        setUsersDbData(resJson);
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
        localStorage.setItem("institutions_data", JSON.stringify(resJson));
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

  useEffect(() => {
    fetch(`http://localhost:3001/companies`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("companies_data", JSON.stringify(resJson));
        setCompaniesData(resJson);
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
    <>
      <Searchbar
        usersDbData={usersDbData}
        setPresentedData={setPresentedData}
        institutionsData={institutionsData}
        companiesData={companiesData}
      />
      <DataBaseContainer presentedData={presentedData} />
    </>
  );
}

export default UsersPage;
