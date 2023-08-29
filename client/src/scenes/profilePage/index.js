import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch(`http://localhost:3001/user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    };

    fetch(`http://localhost:3001/user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchUserData(); // Refresh user data after successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handlePictureUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    };

    fetch(`http://localhost:3001/user/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchUserData(); // Refresh user data after successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div>
      {userData && (
        <div>
          <h1>
            {userData?.firstName} {userData?.lastName}
          </h1>
          <img
            className="user_image"
            src={userData?.picturePath || "/assets/genericUser.png"}
          />
          <FontAwesomeIcon className="icon" icon={faPen} />
          <div>
            <h2>User Data:</h2>
            <h3>{userData?.email}</h3>
            <h3>{userData?.moshalStatus}</h3>
            <form onSubmit={handleUpdate} className="form-example">
              <div className="form-example">
                <label htmlFor="firstName">Enter your first name: </label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div className="form-example">
                <label htmlFor="lastName">Enter your last name: </label>
                <input type="text" name="lastName" id="lastName" />
              </div>
              <div className="form-example">
                <label htmlFor="email">Enter your email: </label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-example">
                <input type="submit" value="Update Profile" />
              </div>
            </form>
          </div>
          <form onSubmit={handlePictureUpdate} className="form-example">
            <div className="form-example">
              <label htmlFor="file">Upload </label>
              <input type="file" id="file" name="filename" />
            </div>
            <div className="form-example">
              <input type="submit" value="Update Profile" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
