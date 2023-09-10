import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../App";
import FeedContainer from "./FeedContainer/FeedContainer";
import Searchbar from "./Searchbar/Searchbar";

import "./index.css";

const JobsPage = () => {
  const [signedUserId, setSignedUserId, token, setToken, handleExpiredToken] =
    useContext(globalContext);
  const [jobsData, setJobsData] = useState([]);
  const [presentedJobsData, setPresentedJobsData] = useState([]);
  const [newJobOfferForm, setNewJobOfferForm] = useState(false);
  const [companiesData, setCompaniesData] = useState(null); // Maybe empty array?

  useEffect(() => {
    fetch(`http://localhost:3001/jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
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
        console.log(resJson);
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

  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // companyId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Company",
  //   required: true,
  // },
  // content: {
  //   type: String,
  //   required: true,
  //   min: 10,
  //   max: 2000,
  // },
  // offerTitle: {
  //   type: String,
  //   required: true,
  //   min: 2,
  //   max: 100,
  // },
  // offerLink: {
  //   type: String,
  //   default: "",
  // },
  // expReq: {
  //   type: String,
  //   default: "",
  // },
  // referral: {
  //   type: String,
  //   default: "",
  // },

  return (
    <div className="jobs-page">
      <h1>Jobs Page</h1>
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
            <label htmlFor="link">Link</label>
            <input type="text" name="link" tabIndex="4" />
            <label htmlFor="expReq">Experience Required</label>
            <textarea
              tabIndex="4"
              name="expReq"
              rows="3"
              maxLength="1000"
              placeholder="Expected experience or skills"
            />
            <label htmlFor="referral">Referral</label>
            <input
              tabIndex="6"
              type="text"
              name="referral"
              minLength="2"
              maxLength="300"
              placeholder="Referral link or name to mention"
            />
            <button type="submit" tabIndex="7">
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
