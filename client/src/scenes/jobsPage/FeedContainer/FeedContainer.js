import JobOffer from "../JobOffer/JobOffer";
import "./FeedContainer.css";

const FeedContainer = (props) => {
  // console.log(props.jobsData);
  return (
    <div className="feed-container">
      {props.jobsData?.map((job) => (
        <div className="job-offer-container" key={job._id}>
          <JobOffer job={job} />
        </div>
      ))}
    </div>
  );
};

export default FeedContainer;
