import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GENERIC_PICTURE_PATH } from '../../../utils/constants'
import './Icons.css'

const Icons = (props) => {
  return (
    <div className='icons'>
      <FontAwesomeIcon className='icon' icon='fa-solid fa-gear' title='Settings' />
      <a href={`/user/${props.signedUserId}`}>
        <img className='navbar-user-picture' src={props.singedUserPicturePath || GENERIC_PICTURE_PATH} alt='User' />
      </a>
      <FontAwesomeIcon className='icon' icon='fa-solid fa-envelope' title='Mail' />
      <FontAwesomeIcon
        className='icon'
        icon='fa-solid fa-right-from-bracket'
        title='Logout'
        onClick={props.handleLogout}
      />
    </div>
  )
}

export default Icons
