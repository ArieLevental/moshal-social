import { useContext } from 'react'
import { jobsDataContext } from '../index.js'
import JobOffer from '../JobOffer/JobOffer'
import NewJobForm from './NewJobForm/NewJobForm'
import './FeedContainer.css'

const FeedContainer = () => {
  const { presentedJobsData } = useContext(jobsDataContext)

  return (
    <div className='feed-container'>
      <NewJobForm />
      {presentedJobsData.map((job) => (
        <div className='job-offer-container' key={job._id}>
          <JobOffer job={job} />
        </div>
      ))}
    </div>
  )
}

export default FeedContainer
