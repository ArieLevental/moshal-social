import { useState, useEffect, useContext, createContext } from "react";

import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import Searchbar from "./Searchbar/Searchbar";

import {
  companiesDataContext,
  globalAuthContext,
  institutionsDataContext,
} from "../../state/state.js";

export const usersDbDataContext = createContext();

function UsersPage() {
  const {
    signedUserData,
    setSignedUserData,
    token,
    setToken,
    handleExpiredToken,
  } = useContext(globalAuthContext);
  const [usersDbData, setUsersDbData] = useState(
    JSON.parse(localStorage.getItem("users_db_data"))
  );
  const { institutionsData, setInstitutionsData } = useContext(
    institutionsDataContext
  );
  const { companiesData, setCompaniesData } = useContext(companiesDataContext);
  const [presentedData, setPresentedData] = useState(usersDbData);

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
        handleExpiredToken(setToken, setSignedUserData);
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
        handleExpiredToken(setToken, setSignedUserData);
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
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  return (
    <>
      <usersDbDataContext.Provider
        value={{ usersDbData, setUsersDbData, presentedData, setPresentedData }}
      >
        <Searchbar
          institutionsData={institutionsData}
          companiesData={companiesData}
        />
        <DataBaseContainer />
      </usersDbDataContext.Provider>
    </>
  );
}

export default UsersPage;
