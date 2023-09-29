import { Link } from 'react-router-dom'
import { GENERIC_PICTURE_PATH } from '../../../utils/constants'
import SocialMediaIcons from '../../../components/Widgets/SocialMediaIcons/SocialMediaIcons'
import './UserCard.css'

const UserCard = ({ userData: { _id, fullName, picturePath, linkedIn, phoneNumber, email } }) => {
  return (
    <div className='user-card'>
      <Link to={`/user/${_id}`}>
        <div className='user-card-fullname'>{fullName}</div>
        <img className='user-card-img' src={picturePath || GENERIC_PICTURE_PATH} alt={`${fullName}'s avatar`} />
      </Link>
      <div className='user-card-icons'>
        <SocialMediaIcons linkedIn={linkedIn} phoneNumber={phoneNumber} email={email} />
      </div>
    </div>
  )
}

export default UserCard
