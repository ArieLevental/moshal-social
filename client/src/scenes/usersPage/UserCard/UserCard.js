import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <div className="user-card__fullname">
        {props.userData?.firstName} {props.userData?.lastName}
      </div>
      <img
        className="user-card-img"
        src={props.userData?.picturePath || "/assets/genericUser.png"}
        alt={`${props.userData.firstName} ${props.userData.lastName}`}
      />
      <div className="user-card-company">
        {`${props.userData?.email} (${props.userData?.moshalStatus}) ${props.userData?.bio}`}
      </div>
    </div>
  );
}

export default UserCard;
