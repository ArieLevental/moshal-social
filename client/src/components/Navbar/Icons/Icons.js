import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { GENERIC_PICTURE_PATH } from '../../../utils/constants'
import './Icons.css'

const Icons = ({ signedUserId, signedUserPicturePath, handleLogout }) => {
  return (
    <div className='icons'>
      <FontAwesomeIcon className='icon' icon='fa-solid fa-gear' title='Settings' />
      <Link to={`/user/${signedUserId}`}>
        <img className='navbar-user-picture' src={signedUserPicturePath || GENERIC_PICTURE_PATH} alt='User' />
      </Link>
      <FontAwesomeIcon className='icon' icon='fa-solid fa-envelope' title='Mail' />
      <FontAwesomeIcon className='icon' icon='fa-solid fa-right-from-bracket' title='Logout' onClick={handleLogout} />
    </div>
  )
}

export default Icons
