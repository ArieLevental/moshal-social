import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      {/* If clicked on name or picture, navigate to user's profile page */}
      <a href={`/user/${props.userData._id}`}>
        <div className="user-card-fullname">
          {props.userData?.firstName} {props.userData?.lastName}
        </div>

        <img
          className="user-card-img"
          src={props.userData?.picturePath || process.env.REACT_APP_GENERIC_PICTURE_PATH}
          alt={`${props.userData?.firstName} ${props.userData?.lastName} Profile Picture`}
        />
      </a>

      <div className="user-card-icons">
        <a
          href={props.userData?.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a
          href={`https://wa.me/+972${props.userData?.phoneNumber.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
        </a>
        <a href={`mailto:${props.userData?.email}`}>
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default UserCard;
