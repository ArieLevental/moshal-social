import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <div className="user-card__fullname">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <img
        className="user-card-img"
        src={props.userData.image}
        alt={`${props.userData.firstName} ${props.userData.lastName}`}
      />
      <div className="user-card-company">
        {`${props.userData.company.title} (${props.userData.company.department}) ${props.userData.company.name}`} 
      </div>
    </div>
  );
}

export default UserCard;
