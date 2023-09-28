import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './JobOffer.css'

const JobOffer = (props) => {
  const date = new Date(props.job.createdAt)
  return (
    <div className='job-offer'>
      <div className='job-offer-header'>
        <div className='job-offer-header-date'>
          <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-clock' /> {date.getDate()}/
          {date.getMonth() + 1}/{date.getFullYear()}
        </div>
        <a href={`/user/${props.job.userId._id}`} className='job-offer-header-publisher' target='_blank'>
          <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-user' /> {props.job.userId.firstName}{' '}
          {props.job.userId.lastName}
        </a>
      </div>

      <div className='job-offer-title'>{props.job.offerTitle}</div>
      {/* TODO: pic and company name links to filtered search */}
      <img className='job-offer-company-img' src={props.job.companyId.logoPath} alt='company logo' />

      {/* <div className="job-offer-company">{props.job.companyId.name}</div> */}

      {/* <div className="job-offer-location">Location: {props.job.location}</div> */}
      <div className='job-offer-detail-holder'>
        Details:
        <div className='job-offer-detail'>{props.job.content}</div>
      </div>
      {props.job.expReq && (
        <div className='job-offer-detail-holder'>
          Experience Required:
          <div className='job-offer-detail'>{props.job.expReq}</div>
        </div>
      )}
      <div className='job-offer-detail-holder'>
        Location:
        <div className='job-offer-detail'>{props.job.location}</div>
      </div>

      {props.job.referral && (
        <div className='job-offer-detail-holder'>
          Referral:
          <div className='job-offer-detail'> {props.job.referral}</div>
        </div>
      )}
      {props.job.offerLink && (
        <a id='job-offer-link' href={props.job.offerLink} target='_blank'>
        {/* <a id='job-offer-link' href="home" target='_blank'> */}
          Click here for external post
        </a>
      )}
      <div className='job-offer-footer-icons'>
        <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-heart' />
        <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-pen' />
        <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-trash' />
      </div>
    </div>
  )
}

export default JobOffer
