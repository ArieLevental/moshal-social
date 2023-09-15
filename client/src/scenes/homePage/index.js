import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { globalAuthContext } from "../../state/state.js";
import { homepageMainText } from "../../data/texts.js";
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
        handleExpiredToken(setToken, setSignedUserData);
      }
    });
  }, []);

  return (
    <div className="homepage-container">
      <Carousel
        className="homepage-carousel"
        autoPlay
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        stopOnHover={false}
      >
        <img src="./assets/homepage-carousel/image1.jpg" alt="Image 1" />
        <img src="./assets/homepage-carousel/image2.jpg" alt="Image 2" />
        <img src="./assets/homepage-carousel/image3.jpg" alt="Image 3" />
      </Carousel>
      <div className="homepage-paragraph">
        Welcome to <span className="accent-text">Moshal Social</span>,
        <br />
        {homepageMainText}
      </div>
      <div className="born-today-widget">
        <div className="born-today-title">Born today</div>
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
                        src={
                          user.picturePath || "./assets/general/genericUser.png"
                        }
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
    </div>
  );
};

export default HomePage;
