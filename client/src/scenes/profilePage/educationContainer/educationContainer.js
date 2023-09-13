import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
// import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./educationContainer.css";
import EducationBox from "../educationBox/educationBox.js";
import {
  globalAuthContext,
  institutionsDataContext,
} from "../../../state/state.js";
import { userDataContext } from "../index.js";

const currentYear = new Date().getFullYear();

const EducationContainer = () => {
  const [inAddMode, setInAddMode] = useState(false);
  const [userEducationData, setUserEducationData] = useState([]);
  const [educationEditMode, setEducationEditMode] = useState(false);
  const {
    setToken,
    setSignedUserData,
    signedUserData,
    token,
    handleExpiredToken,
  } = useContext(globalAuthContext);
  const { institutionsData } = useContext(institutionsDataContext) || [];
  const { userData, setUserData } = useContext(userDataContext);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/user/getEducationItems/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson.educationItems);
        setUserEducationData(resJson.educationItems);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, [inAddMode]);

  const handleAdd = (e) => {
    e.preventDefault();
    setInAddMode(false);
    const educationItemData = {
      institutionId: e.target.institutionId.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      degree: e.target.degree.value,
    };
    fetch(`http://localhost:3001/user/addEducationItem/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(educationItemData),
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        setUserData({ ...userData, ...resJson });
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken(setSignedUserData, setToken);
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  const handleRemoveItems = () => {
    setEducationEditMode(!educationEditMode);
  };

  return (
    <div className="education-container">
      {/* Add button will render only if the user is signed in and the profile is his */}
      {!inAddMode && signedUserData._id === userData._id && (
        <button
          className="education-container-add-button"
          onClick={() => setInAddMode(!inAddMode)}
        >
          Add new item
        </button>
      )}

      {inAddMode && (
        <form className="education-container-new-form" onSubmit={handleAdd}>
          <label htmlFor="institutionId">Institution:</label>
          <select id="institutionId" name="institutionId">
            {institutionsData.map((institution) => (
              <option key={institution._id} value={institution._id}>
                {institution.name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="startYear">Start year:</label>
          <input
            type="number"
            min="1990"
            max={currentYear + 1}
            defaultValue="1990"
            name="startYear"
            id="startYear"
          ></input>

          <br />
          <label htmlFor="endYear">End year:</label>
          <input
            type="number"
            min="1990"
            max={currentYear + 10}
            defaultValue="2000"
            name="endYear"
            id="endYear"
          ></input>
          <br />
          <label htmlFor="degree">Degree:</label>
          <input type="text" name="degree" id="degree"></input>
          <br />
          <button type="submit">
            <FontAwesomeIcon className="icon" icon={faCheck} />
          </button>
          <button
            onClick={(e) => {
              setInAddMode(!inAddMode);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faX} />
          </button>
        </form>
      )}

      <div className="education-section">
        {signedUserData._id === userData._id && (
          <button
            className="education-section-remove-controller"
            onClick={handleRemoveItems}
          >
            Remove items
          </button>
        )}
        {userEducationData.map((educationItem) => (
          <EducationBox
            key={educationItem._id}
            educationItem={educationItem}
            educationEditMode={educationEditMode}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationContainer;
