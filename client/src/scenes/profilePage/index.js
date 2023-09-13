import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEnvelope,
  faCakeCandles,
  faLocationDot,
  faPhoneVolume,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { globalContext } from "../../App";
import PictureEditForm from "../../components/Widjets/PictureEditForm/PictureEditForm";
import CategoryTitle from "../../components/Widjets/CategoryTitle/CategoryTitle";
import ExperienceContainer from "./experienceContainer/experienceContainer";
import DataItem from "./components/DataItem/DataItem";
import "./index.css";

const ProfilePage = () => {
  const {
    signedUserData,
    token,
    handleExpiredToken,
    israelCities,
    institutionsData,
    setInstitutionsData,
    companiesData,
    setCompaniesData,
  } = useContext(globalContext);
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  // const [institutionsData, setInstitutionsData] = useState(
  //   JSON.parse(localStorage.getItem("institutions_data"))
  // );
  // const [companiesData, setCompaniesData] = useState(
  //   JSON.parse(localStorage.getItem("companies_data"))
  // );
  const [detailsFormData, setDetailsFormData] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);
  const [inImgMode, setInImgMode] = useState(false);
  const [imgValue, setImgValue] = useState(null);
  const [url, setUrl] = useState(null);
  const [currentWorkplace, setCurrentWorkplace] = useState("");
  const [currentInstitution, setCurrentInstitution] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/institutions`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("institutions_data", JSON.stringify(resJson));
        setInstitutionsData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/companies`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        localStorage.setItem("companies_data", JSON.stringify(resJson));
        setCompaniesData(resJson);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

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
    fetch(`http://localhost:3001/user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setInEditMode(false);
        setUserData({ ...userData, ...resJson });
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const handleProfileImgUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userImage", imgValue);

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
    <>
      {userData && (
        <>
          <div className="picture-banner-container">
            <img
              // TODO: change src to be consistent
              src={
                userData.bannerPath ||
                "https://media.licdn.com/dms/image/D4D3DAQFSf7lIthy8Jw/image-scale_191_1128/0/1686646782350?e=1695114000&v=beta&t=c8LmreyvFmvo4pF1ZH4-jK_BbgalZAM8fKatPshWVNk"
              }
              alt={userData.firstName + "'s banner Picture"}
              className="banner-picture"
            />
            <img
              className="profile-picture"
              src={userData.picturePath || "/assets/genericUser.png"}
              alt={userData.firstName + "'s Profile Picture"}
            />
            {signedUserData._id === userId && ( // Show picture edit pen when user id is matching
              <FontAwesomeIcon
                className={"icon profile-page-img-edit"}
                icon={faPen}
                onClick={() => {
                  setInImgMode(!inImgMode);
                }}
              />
            )}
          </div>

          <div className="profile-page">
            <div className="profile-page-left-box">
              {inImgMode && ( // When edit picture mode is on
                <PictureEditForm
                  onInputChange={setImgValue}
                  onFormSubmit={handleProfileImgUpload}
                  buttonText="Pic-a-Boo!"
                />
              )}
              <CategoryTitle title="work" />
              <ExperienceContainer
                organizationsData={companiesData}
                setCurrentOrganization={setCurrentWorkplace}
                userData={userData}
                setUserData={setUserData}
                route="Occupation"
                organization="Company"
                field="Position"
              />
              <CategoryTitle title="skills" />
            </div>
            <div className="profile-page-right-box">
              <div className="profile-page-name-and-status">
                <div className="profile-page-name-and-edit">
                  {userData.firstName} {userData.lastName}
                  {/* Show profile edit pen when user id is matching */}
                  {signedUserData._id === userId && (
                    <button
                      onClick={() => {
                        setInEditMode(!inEditMode);
                      }}
                    >
                      {inEditMode ? "Cancel" : "Edit Profile"}
                    </button>
                  )}
                </div>
                <div className="profile-page-status">
                  {userData.moshalStatus || "Status"}
                </div>
              </div>
              {/* TODO: user bio just sits in a p tag with no styling and control over it */}
              <p>{userData.bio || "No bio available"}</p>
              <div className="user-data-container">
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
                  <div className="profile-page-data">
                    <DataItem
                      faIconName={faLocationDot}
                      itemLabel="My city"
                      itemValue={userData.location}
                    />
                    <DataItem
                      faIconName={faPhoneVolume}
                      itemLabel="Catch me at"
                      itemValue={userData.phoneNumber}
                    />
                    <DataItem
                      faIconName={faBriefcase}
                      itemLabel="Current workplace"
                      itemValue={currentWorkplace}
                    />
                    <DataItem
                      faIconName={faCakeCandles}
                      itemLabel="Birthday"
                      itemValue={userData.birthday}
                    />
                  </div>
                )}
                {inEditMode && (
                  <div>
                    <form onSubmit={handleUpdate} className="user-data-form">
                      <div className="form-element">
                        <label
                          htmlFor="location"
                          className="form-element-label"
                        >
                          Location:
                        </label>
                        <select
                          className="form-element-input"
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
                      </div>
                      <div className="form-element">
                        <label
                          htmlFor="linkedIn"
                          className="form-element-label"
                        >
                          Linkedin:{" "}
                        </label>
                        <input
                          className="form-element-input"
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
                      </div>
                      <div className="form-element">
                        <label htmlFor="bio" className="form-element-label">
                          Bio:{" "}
                        </label>
                        <textarea
                          className="form-element-input"
                          style={{ resize: "none" }}
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
                      </div>
                      <div className="form-element">
                        <label
                          htmlFor="moshalStatus"
                          className="form-element-label"
                        >
                          Moshal Status:
                        </label>
                        <select
                          className="form-element-input"
                          id="moshalStatus"
                          name="moshalStatus"
                          defaultValue={userData.moshalStatus}
                        >
                          <option value="Scholar">Scholar</option>
                          <option value="Alumni">Alumni</option>
                          <option value="Staff">Staff</option>
                        </select>
                      </div>
                      <div className="form-element"></div>
                      <div className="form-element"></div>

                      <button
                        type="submit"
                        className="user-data-form-submit-button"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                )}
              </div>

              <CategoryTitle title="studied" />
              {/* <EducationContainer
                    institutionsData={institutionsData}
                    setUserData={setUserData}
                    userData={userData}
                  /> */}
              <ExperienceContainer
                organizationsData={institutionsData}
                setCurrentOrganization={setCurrentInstitution}
                userData={userData}
                setUserData={setUserData}
                route="Education"
                organization="Institution"
                field="Degree"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
