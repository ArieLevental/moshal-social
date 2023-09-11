import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../App";
import FeedContainer from "./FeedContainer/FeedContainer";
import Searchbar from "./Searchbar/Searchbar";

const JobsPage = () => {
  const {
    signedUserData,
    token,
    handleExpiredToken,
    israelCities,
    jobsData,
    setJobsData,
    companiesData,
    setCompaniesData,
  } = useContext(globalContext);
  
  const [presentedJobsData, setPresentedJobsData] = useState(jobsData);
  


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
        setCompaniesData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, []);

  return (
    <>
      <Searchbar
        jobsData={jobsData}
        setPresentedJobsData={setPresentedJobsData}
        companiesData={companiesData}
      />
      <FeedContainer jobsData={presentedJobsData} setJobsData={setJobsData} />
    </>
  );
};

export default JobsPage;
