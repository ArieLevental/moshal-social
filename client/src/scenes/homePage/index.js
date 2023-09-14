import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        <img src="./assets/homepage/image1.jpg" alt="Image 1" />
        <img src="./assets/homepage/image2.jpg" alt="Image 2" />
        <img src="./assets/homepage/image3.jpg" alt="Image 3" />
      </Carousel>
      <div className="homepage-paragraph">
        Welcome to <span className="accent-text">Moshal Social,</span>
        <br />
        the heart of our vibrant Moshal scholarship
        community. Here, scholars, mentors, and partners come together to
        connect, collaborate, and make a lasting impact. Our enterprise social
        network is your gateway to a world of opportunities, knowledge sharing,
        and support. Whether you're seeking guidance on your academic journey,
        eager to explore career prospects, or simply looking to engage with
        fellow Moshal scholars, this platform is your digital home. Join us in
        shaping a brighter future, one connection at a time. Together, we are
        Moshal Social - empowering dreams, fostering success.
      </div>
      <div className="born-today-widget">
        <div className="born-today-title">
          Born today:
          
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
    </div>
  );
};

export default HomePage;
