import "./JobOffer.css";

const JobOffer = (props) => {
  const date = new Date(props.job.createdAt);
  return (
    <div className="job-offer">

      <div className="job-offer-header"> 
      <div className="job-offer-header-date">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </div>
      <a
        href={`/user/${props.job.userId._id}`}
        className="job-offer-header-publisher"
        target="_blank"
      >
        By {props.job.userId.firstName} {props.job.userId.lastName}
      </a>
      </div>

      <div className="job-offer-title">{props.job.offerTitle}</div>
      {/* TODO: pic and company name links to filtered search */}
      <img
        className="job-offer-company-img"
        src={props.job.companyId.logoPath}
        alt="company logo"
      />

      <div className="job-offer-company">{props.job.companyId.name}</div>

      {/* <div className="job-offer-location">Location: {props.job.location}</div> */}
      <div className="job-offer-body">{props.job.content}</div>
      {props.job.offerLink && (
        <div className="job-offer-link">
          External link:{" "}
          <a href={props.job.offerLink} target="_blank">
            {props.job.offerLink}
          </a>
        </div>
      )}
      {props.job.expReq && (
        <div className="job-offer-exp-req">
          Experience Required: {props.job.expReq}
        </div>
      )}
      {props.job.referral && (
        <div className="job-offer-referral">Referral: {props.job.referral}</div>
      )}
    </div>
  );
};

export default JobOffer;
