import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../App";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import israelCities from "./israel_cities.json";
import "./index.css";
import EducationContainer from "./educationContainer/educationContainer.js";

const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [detailsFormData, setDetailsFormData] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);
  const [inImgMode, setInImgMode] = useState(false);
  const [imgValue, setImgValue] = useState(null);
  const [url, setUrl] = useState(null);
  const [signedUserId, setSignedUserId, token, setToken, handleExpiredToken] =
    useContext(globalContext);

  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData(resJson);
        setDetailsFormData({
          location: resJson.location,
          linkedIn: resJson.linkedIn,
          bio: resJson.bio,
        });
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: this solution results api call for every "pen" click
  }, [inEditMode, inImgMode]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      location: e.target.location.value,
      bio: e.target.bio.value,
      moshalStatus: e.target.moshalStatus.value,
      linkedIn: e.target.linkedIn.value,
    };
  };

  const handleProfileImgUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userImage", imgValue);

    console.log(formData, imgValue);

    fetch(`http://localhost:3001/storage/profile/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then(async (res) => {
      setInImgMode(false);
      if (res.status === 200) {
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  return (
    <div>
      {userData && (
        <div>
          <div className="name-and-status">
            <div className="name">
              {userData.firstName} {userData.lastName}
            </div>
            <div className="status">{userData.moshalStatus || "Status"}</div>
          </div>
          <p>{userData.bio || "No bio available"}</p>
          {/* <p>{userData.linkedIn || "No linkedIn available"}</p> */}

          <img
            className="user_image"
            src={userData.picturePath || "/assets/genericUser.png"}
            alt={userData.firstName + "'s Profile Picture"}
          />
          {/* Show picture edit pen when user id is matching */}
          {signedUserId === userId && (
            <FontAwesomeIcon
              className={"icon"}
              icon={faPen}
              onClick={() => {
                setInImgMode(!inImgMode);
              }}
            />
          )}
          {/* Edit picture mode is on */}
          {inImgMode && (
            <div>
              <form onSubmit={(e) => handleProfileImgUpload(e)}>
                <input
                  type="file"
                  accept="image/*"
                  name="userImage"
                  id="userImage"
                  onChange={(e) => setImgValue(e.target.files[0])}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          )}
          <div>
            {/* Show profile edit pen when user id is matching */}
            {signedUserId === userId && (
              <FontAwesomeIcon
                className={"icon" + (inEditMode ? " active" : "")}
                icon={faPen}
                onClick={() => {
                  setInEditMode(!inEditMode);
                }}
              />
            )}
            <a href={userData.linkedIn} target="_blank">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a
              href={`https://wa.me/+972${userData.phoneNumber.slice(1)}`}
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
            </a>
            <a href={`mailto:${userData.email}`}>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
            {!inEditMode && (
              <div>
                <p>
                  <strong>Location:</strong>{" "}
                  {userData.location || "Not provided"}
                </p>
                <p>
                  <strong>Phone Number:</strong>{" "}
                  {userData.phoneNumber || "Not provided"}
                </p>
                <p>
                  <strong>My field:</strong>{" "}
                  {userData.education[0] || "Not provided"}
                </p>
                <p>
                  <strong>I work at:</strong>{" "}
                  {userData.occupation[0] || "No where, currently"}
                </p>
              </div>
            )}
            {inEditMode && (
              <div>
                <form onSubmit={(e) => handleUpdate(e)}>
                  <label htmlFor="location">Location: </label>
                  <select
                    type="text"
                    id="location"
                    name="location"
                    onChange={(e) => {
                      setDetailsFormData({
                        ...detailsFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={detailsFormData.location}
                  >
                    {israelCities.city.map((c) => (
                      <option key={c.city_symbol} value={c.english_name}>
                        {c.english_name}
                      </option>
                    ))}
                  </select>
                  <br />
                  <label htmlFor="linkedIn">Linkedin: </label>
                  <input
                    type="text"
                    id="linkedIn"
                    name="linkedIn"
                    onChange={(e) => {
                      setDetailsFormData({
                        ...detailsFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={detailsFormData.linkedIn}
                  />
                  <br />
                  <label htmlFor="bio">Bio: </label>
                  <textarea
                    style={{ resize: "none" }}
                    rows="4"
                    cols="32"
                    id="bio"
                    name="bio"
                    onChange={(e) => {
                      setDetailsFormData({
                        ...detailsFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={detailsFormData.bio}
                  />
                  <br />
                  <label htmlFor="moshalStatus">Moshal Status: </label>
                  <select
                    id="moshalStatus"
                    name="moshalStatus"
                    defaultValue={userData.moshalStatus}
                  >
                    <option value="Scholar">Scholar</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Staff">Staff</option>
                  </select>
                  <br />

                  <input type="submit" value="Submit" />
                </form>
              </div>
            )}
          </div>
          <div className="education">
            <h4>Education:</h4>
            <EducationContainer />
            {/* COMPONENT FOR EDUCATION BOXES */}
            {/* RUN WITH FOREACH AND LET ADD */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
