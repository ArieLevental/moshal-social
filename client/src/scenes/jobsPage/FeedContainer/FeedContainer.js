import JobOffer from "../JobOffer/JobOffer";
import "./FeedContainer.css";
import NewJobForm from "./NewJobForm/NewJobForm";

const FeedContainer = (props) => {

  return (
    <div className="feed-container">
      <NewJobForm />
      {props.jobsData?.map((job) => (
        <div className="job-offer-container" key={job._id}>
          <JobOffer job={job} />
        </div>
      ))}
    </div>
  );
};

export default FeedContainer;
