import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../App";
import FeedContainer from "./FeedContainer/FeedContainer";
import Searchbar from "./Searchbar/Searchbar";
// import israelCities from "./israel_cities.json";

import "./index.css";

const JobsPage = () => {
  const {
    signedUserId,
    token,
    handleExpiredToken,
    israelCities,
    jobsData,
    setJobsData,
    companiesData,
    setCompaniesData,
  } = useContext(globalContext);
  // const [jobsData, setJobsData] = useState([]);
  const [presentedJobsData, setPresentedJobsData] = useState(jobsData);
  const [newJobOfferForm, setNewJobOfferForm] = useState(false);
  // const [companiesData, setCompaniesData] = useState(null); // Maybe empty array?

  useEffect(() => {
    fetch(`http://localhost:3001/jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        // console.log(resJson);
        localStorage.setItem("jobs_data", JSON.stringify(resJson));
        setJobsData(resJson);
        setPresentedJobsData(resJson);
        // console.log(jobsData);
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
        // console.log(resJson);
        setCompaniesData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, []);

  const revealNewJobOfferForm = () => {
    setNewJobOfferForm(!newJobOfferForm);
  };

  const addJobOfferHandler = (e) => {
    e.preventDefault();
    const newJobOffer = {
      userId: signedUserId,
      companyId: e.target.company.value,
      content: e.target.content.value,
      offerTitle: e.target.title.value,
      offerLink: e.target.link.value,
      location: e.target.location.value,
      expReq: e.target.expReq.value,
      referral: e.target.referral.value,
    };
    fetch(`http://localhost:3001/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newJobOffer),
    })
      .then(async (res) => {
        const resJson = await res.json();
        if (res.status === 201) {
          console.log(resJson);
          localStorage.setItem(
            "jobs_data",
            JSON.stringify([...jobsData, resJson])
          );
          setJobsData([...jobsData, resJson]);
          revealNewJobOfferForm();
        } else if (res.status === 401) {
          alert("You are not authorized to view this page");
          handleExpiredToken();
        } else {
          alert("Something went wrong, please try again later");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="jobs-page">
      <Searchbar
        jobsData={jobsData}
        setPresentedJobsData={setPresentedJobsData}
        companiesData={companiesData}
      />
      <div className="jobs-page-new-job-offer">
        <div className="jobs-page-add-job-button">
          {newJobOfferForm ? (
            <button onClick={revealNewJobOfferForm}>Cancel</button>
          ) : (
            <button onClick={revealNewJobOfferForm}>Add Job Offer</button>
          )}
        </div>
        {newJobOfferForm ? (
          <form
            className="jobs-page-new-job-offer-form"
            onSubmit={addJobOfferHandler}
          >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" required tabIndex="1" />
            <label htmlFor="company">Company</label>
            <select type="text" name="company" required tabIndex="2">
              {companiesData?.map((company) => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))}
            </select>
            <label htmlFor="content" required>
              Content
            </label>
            <textarea
              tabIndex="3"
              name="content"
              rows="5"
              minLength="10"
              maxLength="2000"
              placeholder="Describe the job offer"
            />
            <label htmlFor="location" required>
              Location:
            </label>
            <select
              // type="text"
              id="location"
              name="location"
              // onChange={(e) => {
              //   setDetailsFormData({
              //     ...detailsFormData,
              //     [e.target.name]: e.target.value,
              //   });
              // }}
              // value={detailsFormData.location}
            >
              {israelCities.city.map((c) => (
                <option key={c.city_symbol} value={c.english_name}>
                  {c.english_name}
                </option>
              ))}
            </select>
            <label htmlFor="link">Link</label>
            <input type="text" name="link" tabIndex="5" />
            <label htmlFor="expReq">Experience Required</label>
            <textarea
              tabIndex="6"
              name="expReq"
              rows="3"
              maxLength="1000"
              placeholder="Expected experience or skills"
            />
            <label htmlFor="referral">Referral</label>
            <input
              tabIndex="7"
              type="text"
              name="referral"
              minLength="2"
              maxLength="300"
              placeholder="Referral link or name to mention"
            />
            <button type="submit" tabIndex="8">
              Submit
            </button>
          </form>
        ) : null}
      </div>
      {jobsData && (
        <FeedContainer jobsData={presentedJobsData} setJobsData={setJobsData} />
      )}
    </div>
  );
};

export default JobsPage;
