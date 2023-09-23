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
import PictureEditForm from "../../components/Widgets/PictureEditForm/PictureEditForm";
import CategoryTitle from "../../components/Widgets/CategoryTitle/CategoryTitle";
import {
  companiesDataContext,
  generalDataContext,
  globalAuthContext,
  institutionsDataContext,
} from "../../state/state.js";
import {
  capitalizeFirstLetters,
  formatDate,
} from "../../utils/formattingUtils";

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
    fetch(`${process.env.REACT_APP_API_BASE_URL}/institutions`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.error(resJson);
        localStorage.setItem("institutions_data", JSON.stringify(resJson));
        setInstitutionsData(resJson);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/companies`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.error(resJson);
        localStorage.setItem("companies_data", JSON.stringify(resJson));
        setCompaniesData(resJson);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
    // TODO: merge with second useEffect
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/getEducationItems/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        // console.log(experienceItems, resJson[experienceItems]);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        // if (resJson.educationItems.length > 0) {
        //   props.setCurrentOrganization(
        //     resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
        //   );
        // }
        setEducationItems(resJson);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/getOccupationItems/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        // console.log(experienceItems, resJson[experienceItems]);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        // if (resJson.educationItems.length > 0) {
        //   props.setCurrentOrganization(
        //     resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
        //   );
        // }
        setOccupationItems(resJson);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.error(resJson);
        setUserData(resJson);
        setDetailsFormData({
          location: resJson.location,
          linkedIn: resJson.linkedIn,
          bio: resJson.bio,
          dateOfBirth: resJson.dateOfBirth,
        });
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
    // TODO: this solution results api call for every "pen" click
  }, [inEditMode, inImgMode]);

  const deleteEducationItem = (educationId, institutionId) => {
    console.log(educationId, institutionId);
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/deleteEducationItem/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ educationId, institutionId }),
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setEducationItems(
          educationItems.filter(
            (educationItem) => educationItem._id !== educationId
          )
        );
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
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
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/addEducationItem/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(experienceItemData),
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData({ ...userData, ...resJson });
        setEducationItems([...educationItems, resJson.newItem]);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
  };

  const deleteOccupationItem = (occupationId, companyId) => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/deleteOccupationItem/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ occupationId, companyId }),
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setOccupationItems(
          occupationItems.filter(
            (occupationItem) => occupationItem._id !== occupationId
          )
        );
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
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
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/user/addOccupationItem/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(experienceItemData),
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData({ ...userData, ...resJson });
        setOccupationItems([...occupationItems, resJson.newItem]);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
      }
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      location: e.target.location.value,
      bio: e.target.bio.value,
      moshalStatus: e.target.moshalStatus.value,
      linkedIn: e.target.linkedIn.value,
      dateOfBirth: formatDate(e.target.dateOfBirth.value),
    };

    // console.log(updatedData);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (res.status === 200) {
        const resJson = await res.json();
        setInEditMode(false);
        setUserData({ ...userData, ...resJson });
        console.log(resJson);
      } else if (res.status === 401) {
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  const handleProfileImgUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userImage", imgValue);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/storage/profile/${userId}`, {
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
        console.log("You are not authorized to view this page");
        handleExpiredToken(setToken, setSignedUserData);
      } else {
        console.log("Something went wrong, please try again later");
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
                src={userData.bannerPath || "/assets/general/genericBanner.png"}
                alt={userData.firstName + "'s banner Picture"}
                className="banner-picture"
              />
              <img
                className="profile-picture"
                src={
                  userData.picturePath ||
                  process.env.REACT_APP_GENERIC_PICTURE_PATH
                }
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
                          ).toLocaleDateString("en-GB", {
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
                            <option
                              key={c.city_symbol}
                              value={capitalizeFirstLetters(c.english_name)}
                            >
                              {capitalizeFirstLetters(c.english_name)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-element">
                        <label
                          htmlFor="linkedIn"
                          className="form-element-label"
                        >
                          Linkedin:
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
                          Bio:
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
                          value={formatDate(detailsFormData.dateOfBirth)}
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
