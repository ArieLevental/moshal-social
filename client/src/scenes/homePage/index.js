import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faGift } from "@fortawesome/free-solid-svg-icons";
import { globalAuthContext } from "../../state/state.js";
import "./index.css";

const HomePage = () => {
  const { setSignedUserData, setToken, token, handleExpiredToken } =
    useContext(globalAuthContext);
  const [usersDbData, setUsersDbData] = useState(
    JSON.parse(localStorage.getItem("users_db_data"))
  );

  useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("users_db_data", JSON.stringify(resJson));
        setUsersDbData(resJson);
        console.log(resJson);
      } else if (res.status === 401) {
        handleExpiredToken(setToken,setSignedUserData);
      }
    });
  }, []);

  return (
    <>
      <div className="homepage-img-wrap">
        <img
          className="homepage-placeholder"
          src="./assets/homepage-events.jpg"
          alt="events"
        />
      </div>
      <div className="born-today-widget">
        <div className="born-today-title">
          <FontAwesomeIcon icon={faCakeCandles} /> Celebrating today{" "}
          <FontAwesomeIcon icon={faGift} />
        </div>
        <div className="born-today-container">
          {usersDbData &&
            usersDbData.map((user) => {
              const userDateOfBirth = new Date(user.dateOfBirth);
              const today = new Date();
              if (
                userDateOfBirth.getDate() === today.getDate() &&
                userDateOfBirth.getMonth() === today.getMonth()
              ) {
                return (
                  <div className="born-today-user" key={user.id}>
                    <a href={`/user/${user._id}`}>
                      <img
                        className="born-today-user-img"
                        src={user.picturePath || "./assets/genericUser.png"}
                        alt="user"
                      />
                      <div className="born-today-user-name">
                        {user.firstName} {user.lastName}
                      </div>
                    </a>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
