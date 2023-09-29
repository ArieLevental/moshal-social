import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterContributeText } from '../../utils/texts.js'
import { ADIR_LINKEDIN_URL, ARIE_LINKEDIN_URL } from '../../utils/constants.js'
import './Footer.css'

/**
 * React functional component that renders the footer of the application.
 * @returns {JSX.Element} The JSX element that represents the footer.
 */
const Footer = () => {
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    fetchRandomFact()
  }, [])

  const fetchRandomFact = async () => {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      const data = await response.json()
      setRandomFact(data.text)
    } catch (error) {
      console.error('Error fetching random fact:', error)
    }
  }

  return (
    <div className='footer'>
      <div className='tooltip-container'>
        <div className='tooltip-text'>
          <FontAwesomeIcon icon='fa-solid fa-face-surprise' /> Random fact of the day:
          <br />
          {randomFact}
        </div>
        Terms of Service
      </div>
      <div>Privacy Policy</div>
      <div>
        © Made by{' '}
        <a id='footer-credit-link' href={ADIR_LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
          Adir
        </a>{' '}
        and{' '}
        <a id='footer-credit-link' href={ARIE_LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
          Arie
        </a>
      </div>
      <div className='tooltip-container'>
        <div className='tooltip-text'>
          <FooterContributeText />
        </div>
        <span className='icon-on-hover'>
          <FontAwesomeIcon icon='fa-solid fa-hand-point-left' shake /> Contribute!
        </span>
      </div>
    </div>
  )
}

export default Footer
