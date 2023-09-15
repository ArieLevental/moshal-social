import { useContext } from "react";
import JobOffer from "../JobOffer/JobOffer";
import "./FeedContainer.css";
import NewJobForm from "./NewJobForm/NewJobForm";
import { jobsDataContext } from "../index.js";

const FeedContainer = () => {
  const { presentedJobsData } = useContext(jobsDataContext);

  return (
    <div className="feed-container">
      <NewJobForm />
      {presentedJobsData.map((job) => (
        <div className="job-offer-container" key={job._id}>
          <JobOffer job={job} />
        </div>
      ))}
    </div>
  );
};

export default FeedContainer;
