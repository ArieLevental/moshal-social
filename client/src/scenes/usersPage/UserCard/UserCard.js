import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GENERIC_PICTURE_PATH } from '../../../utils/constants'
import './UserCard.css'

function UserCard(props) {
  return (
    <div className='user-card'>
      {/* If clicked on name or picture, navigate to user's profile page */}
      <a href={`/user/${props.userData._id}`}>
        <div className='user-card-fullname'>
          {props.userData?.firstName} {props.userData?.lastName}
        </div>

        <img
          className='user-card-img'
          src={props.userData?.picturePath || GENERIC_PICTURE_PATH}
          alt={`${props.userData?.firstName} ${props.userData?.lastName} avatar`}
        />
      </a>

      <div className='user-card-icons'>
        <a href={props.userData?.linkedIn} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className='icon' icon='fa-brands fa-linkedin' />
        </a>
        <a href={`https://wa.me/+972${props.userData?.phoneNumber.slice(1)}`} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className='icon' icon='fa-brands fa-whatsapp' />
        </a>
        <a href={`mailto:${props.userData?.email}`}>
          <FontAwesomeIcon className='icon' icon='fa-solid fa-envelope' />
        </a>
      </div>
    </div>
  )
}

export default UserCard
