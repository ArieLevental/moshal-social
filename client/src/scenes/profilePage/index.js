import { useContext, useState, useEffect, createContext } from "react";
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
import PictureEditForm from "../../components/Widjets/PictureEditForm/PictureEditForm";
import CategoryTitle from "../../components/Widjets/CategoryTitle/CategoryTitle";
import {
  companiesDataContext,
  generalDataContext,
  globalAuthContext,
  institutionsDataContext,
} from "../../state/state.js";

import ExperienceContainer from "./experienceContainer/experienceContainer";
import DataItem from "./components/DataItem/DataItem";
import "./index.css";

export const userDataContext = createContext();

const ProfilePage = () => {
  const { israelCities } = useContext(generalDataContext);
  const {
    signedUserData,
    setSignedUserData,
    token,
    setToken,
    handleExpiredToken,
  } = useContext(globalAuthContext);
  const { institutionsData, setInstitutionsData } = useContext(
    institutionsDataContext
  );
  const { companiesData, setCompaniesData } = useContext(companiesDataContext);

  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [detailsFormData, setDetailsFormData] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);
  const [inImgMode, setInImgMode] = useState(false);
  const [imgValue, setImgValue] = useState(null);
  // const [url, setUrl] = useState(null);
  const [currentWorkplace, setCurrentWorkplace] = useState("");
  // const [currentInstitution, setCurrentInstitution] = useState("");
  const [educationItems, setEducationItems] = useState([]);
  const [occupationItems, setOccupationItems] = useState([]);

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
        handleExpiredToken(setSignedUserData, setToken);
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
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/user/getEducationItems/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        // console.log(experienceItems, resJson[experienceItems]);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        // if (resJson.educationItems.length > 0) {
        //   props.setCurrentOrganization(
        //     resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
        //   );
        // }
        setEducationItems(resJson.educationItems);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/user/getOccupationItems/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        // console.log(experienceItems, resJson[experienceItems]);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        // if (resJson.educationItems.length > 0) {
        //   props.setCurrentOrganization(
        //     resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
        //   );
        // }
        setOccupationItems(resJson.occupationItems);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
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
          dateOfBirth: resJson.dateOfBirth,
        });
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
    // TODO: this solution results api call for every "pen" click
  }, [inEditMode, inImgMode]);

  const deleteEducationItem = (educationId, institutionId) => {
    console.log(educationId, institutionId);
    fetch(`http://localhost:3001/user/deleteEducationItem/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ educationId, institutionId }),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setEducationItems(
          educationItems.filter(
            (educationItem) => educationItem._id !== educationId
          )
        );
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const addEducationItem = (experienceItemData) => {
    // setInAddMode(false);
    // const experienceItemData = {
    //   organizationId: e.target.organizationId.value,
    //   startYear: e.target.startYear.value,
    //   endYear: e.target.endYear.value,
    //   [fieldName]: e.target[fieldName].value,
    // };
    fetch(`http://localhost:3001/user/addEducationItem/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(experienceItemData),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData({ ...userData, ...resJson });
        setEducationItems([...educationItems, resJson.newItem]);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const deleteOccupationItem = (occupationId, companyId) => {
    fetch(`http://localhost:3001/user/deleteOccupationItem/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ occupationId, companyId }),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setOccupationItems(
          occupationItems.filter(
            (occupationItem) => occupationItem._id !== occupationId
          )
        );
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const addOccupationItem = (experienceItemData) => {
    // setInAddMode(false);
    // const experienceItemData = {
    //   organizationId: e.target.organizationId.value,
    //   startYear: e.target.startYear.value,
    //   endYear: e.target.endYear.value,
    //   [fieldName]: e.target[fieldName].value,
    // };
    fetch(`http://localhost:3001/user/addOccupationItem/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(experienceItemData),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData({ ...userData, ...resJson });
        setOccupationItems([...occupationItems, resJson.newItem]);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      location: e.target.location.value,
      bio: e.target.bio.value,
      moshalStatus: e.target.moshalStatus.value,
      linkedIn: e.target.linkedIn.value,
      dateOfBirth: e.target.dateOfBirth.value,
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
        handleExpiredToken(setToken, setSignedUserData);
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
      const resJson = await res.json();
      setInImgMode(false);
      if (res.status === 200) {
        const updatedSignedUser = {
          ...signedUserData,
          picturePath: resJson.picturePath,
        };
        setSignedUserData(updatedSignedUser);
        localStorage.setItem("user_data", JSON.stringify(updatedSignedUser));
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  return (
    <>
      <userDataContext.Provider value={{ userData, setUserData }}>
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
                  experienceItems={occupationItems}
                  setExperienceItems={setOccupationItems}
                  deleteExperienceItem={deleteOccupationItem}
                  addExperienceItem={addOccupationItem}
                  // setCurrentOrganization={setCurrentWorkplace}
                  // route="Occupation"
                  // organization="Company"
                  organizationType="Company"
                  field="position"
                />
                <CategoryTitle title="skills" />
              </div>
              <div className="profile-page-right-box">
                <div className="profile-page-name-and-status">
                  <div className="profile-page-name-and-edit">
                    {userData.firstName} {userData.lastName}
                    {/* Show profile edit button when user id is matching */}
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
                      {userData.dateOfBirth && (
                        <DataItem
                          faIconName={faCakeCandles}
                          itemLabel="Birthday"
                          itemValue={new Date(
                            userData.dateOfBirth
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        />
                      )}
                    </div>
                  )}
                  {inEditMode && (
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
                      <div className="form-element">
                        <label
                          htmlFor="dateOfBirth"
                          className="form-element-label"
                        >
                          Birthday:
                        </label>
                        <input
                          className="form-element-input"
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          onChange={(e) => {
                            setDetailsFormData({
                              ...detailsFormData,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          defaultValue={userData.dateOfBirth} // TODO: not working
                          value={detailsFormData.dateOfBirth}
                        />
                      </div>

                      <button
                        type="submit"
                        className="user-data-form-submit-button"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </div>

                <CategoryTitle title="studied" />
                <ExperienceContainer
                  organizationsData={institutionsData}
                  experienceItems={educationItems}
                  setExperienceItems={setEducationItems}
                  deleteExperienceItem={deleteEducationItem}
                  addExperienceItem={addEducationItem}
                  // setCurrentOrganization={setCurrentInstitution}
                  // route="Education"
                  organizationType="Institution"
                  field="Degree"
                />
              </div>
            </div>
          </>
        )}
      </userDataContext.Provider>
    </>
  );
};

export default ProfilePage;
