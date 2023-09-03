import "./UserCard.css";

function UserCard(props) {
  return (
    <a className="user-card" href={`/user/${props.userData._id}`}>
      <div className="user-card__fullname">
        {props.userData?.firstName} {props.userData?.lastName}
      </div>
      <img
        className="user-card-img"
        src={props.userData?.picturePath || "/assets/genericUser.png"}
        alt={`${props.userData.firstName} ${props.userData.lastName}`}
      />

      <div className="user-details">
        <div className="user-detail">{props.userData?.email}</div>
        <div className="user-detail">
          <a
            href={`https://wa.me/+972${props.userData?.phoneNumber?.slice(1)}`}
            target="_blank"
          >
            whatsApp with Me
          </a>
        </div>
      </div>
    </a>
  );
}

export default UserCard;
