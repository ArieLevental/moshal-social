import { useContext, useState, useEffect, createContext } from "react";
import FeedContainer from "./FeedContainer/FeedContainer";
import Searchbar from "./Searchbar/Searchbar";
import { globalAuthContext } from "../../state/state.js";
import { companiesDataContext } from "../../state/state.js";

export const jobsDataContext = createContext();

const JobsPage = () => {
  const { setToken, setSignedUserData, token, handleExpiredToken } =
    useContext(globalAuthContext);
  const { companiesData, setCompaniesData } = useContext(companiesDataContext);
  const [jobsData, setJobsData] = useState(
    JSON.parse(localStorage.getItem("jobs_data"))
  );

  const [presentedJobsData, setPresentedJobsData] = useState(jobsData || []);

  useEffect(() => {
    fetch(`http://localhost:3001/jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("jobs_data", JSON.stringify(resJson));
        setJobsData(resJson);
        setPresentedJobsData(resJson);
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
        setCompaniesData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, []);

  return (
    <>
      <jobsDataContext.Provider
        value={{
          jobsData,
          setJobsData,
          presentedJobsData,
          setPresentedJobsData,
        }}
      >
        <Searchbar />
        <FeedContainer />
      </jobsDataContext.Provider>
    </>
  );
};

export default JobsPage;
