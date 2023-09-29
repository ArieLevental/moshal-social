import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WHATSAPP_URL_BASE } from '../../../utils/constants'

const SocialMediaIcons = ({linkedIn, phoneNumber, email}) => {
  return (
    <>
      {linkedIn && (
        <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className='icon' icon='fa-brands fa-linkedin' />
        </a>
      )}
      <a href={`${WHATSAPP_URL_BASE}${phoneNumber.slice(1)}`} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon className='icon' icon='fa-brands fa-whatsapp' />
      </a>
      <a href={`mailto:${email}`}>
        <FontAwesomeIcon className='icon' icon='fa-solid fa-envelope' />
      </a>
    </>
  )
}

export default SocialMediaIcons
