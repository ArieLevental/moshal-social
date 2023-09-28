import { FooterContributeText } from '../../utils/texts.js'
import { ADIR_LINKEDIN_URL, ARIE_LINKEDIN_URL } from '../../utils/constants.js'
import './Footer.css'

/**
 * React functional component that renders the footer of the application.
 * @returns {JSX.Element} The JSX element that represents the footer.
 */
const Footer = () => {
  return (
    <div className='footer'>
      <div>Terms of Service</div>
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
        Contribute!
      </div>
    </div>
  )
}

export default Footer
