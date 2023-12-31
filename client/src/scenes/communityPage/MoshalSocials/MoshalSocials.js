import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MoshalSocials.css'

const MoshalSocials = () => {
  return (
    <div className='moshal-socials community-page-column'>
      <h1>Moshal Socials</h1>

      <div className='social-icons'>
        <div className='social-icon'>
          <a href='https://www.linkedin.com/school/moshal-program-israel/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-linkedin' color='#0e76a8' size='2x' />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://www.facebook.com/moshalprogram' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-facebook' color='#3b5998' size='2x' />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://www.instagram.com/moshal_program_israel/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-instagram' color='#972861' size='2x' />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://www.youtube.com/@FromDreamersToLeaders' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-youtube' color='#c4302b' size='2x' />
          </a>
        </div>
      </div>

      <div className='youtube-videos'>
        <iframe
          width='100%'
          src='https://www.youtube.com/embed/smMMcPrdm0o?si=u15fkwiuS1IWz9cV'
          title='YouTube video player'
          frameBorder='1'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
        <iframe
          width='100%'
          src='https://www.youtube.com/embed/srs9ilATl98?si=dbOi1NrkayACYA8h'
          title='YouTube video player'
          frameBorder='1'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default MoshalSocials
