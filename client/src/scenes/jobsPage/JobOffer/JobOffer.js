import {memo} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './JobOffer.css'

const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const JobOffer = memo((props) => {
  const jobOfferData = props.job
  const userData = jobOfferData.userId
  const formattedDate = formatDate(new Date(jobOfferData.createdAt))

  return (
    <div className='job-offer'>
      <div className='job-offer-header'>
        <div className='job-offer-header-date'>
          <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-clock' /> {formattedDate}
        </div>
        <Link to={`/user/${userData._id}`} className='job-offer-header-publisher'>
          <FontAwesomeIcon className='job-offer-footer-icon' icon='fa-solid fa-user' /> {userData.fullName}
        </Link>
      </div>

      <div className='job-offer-title'>{jobOfferData.offerTitle}</div>
      <img className='job-offer-company-img' src={jobOfferData.companyId.logoPath} alt='company logo' />
      <div className='job-offer-detail-holder'>
        Details:
        <div className='job-offer-detail'>{jobOfferData.content}</div>
      </div>

      {jobOfferData.expReq && (
        <div className='job-offer-detail-holder'>
          Experience Required:
          <div className='job-offer-detail'>{jobOfferData.expReq}</div>
        </div>
      )}

      <div className='job-offer-detail-holder'>
        Location:
        <div className='job-offer-detail'>{jobOfferData.location}</div>
      </div>

      {jobOfferData.referral && (
        <div className='job-offer-detail-holder'>
          Referral:
          <div className='job-offer-detail'> {jobOfferData.referral}</div>
        </div>
      )}

      {jobOfferData.offerLink && (
        <a id='job-offer-link' href={jobOfferData.offerLink} target='_blank' rel='noopener noreferrer'>
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
})

export default JobOffer
