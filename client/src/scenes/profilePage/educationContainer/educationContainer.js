import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./educationContainer.css";
import EducationBox from "../educationBox/educationBox.js";

const currentYear = new Date().getFullYear();

const EducationContainer = (props) => {
  const [inAddMode, setInAddMode] = useState(false);
  const [signedUserId, setSignedUserId, token, setToken, handleExpiredToken] =
    useContext(globalContext);

  const handleAdd = (e) => {
    e.preventDefault();
    setInAddMode(false);
    const educationItemData = {
      institutionId: e.target.institutionId.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      degree: e.target.degree.value,
    };
    fetch(
      `http://localhost:3001/user/addEducationItem/${localStorage.user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(educationItemData),
      }
    ).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        props.setUserData({ ...props.userData, ...resJson });
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  return (
    <div className="education-container">
      <div className="education-add-new">
        {inAddMode && (
          <div>
            <form onSubmit={handleAdd}>
              <label htmlFor="institutionId">Institution:</label>
              <select id="institutionId" name="institutionId">
                {props?.institutionsData.map((institution) => (
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
          </div>
        )}
        {!inAddMode && (
          <button onClick={() => setInAddMode(!inAddMode)}>+</button>
        )}
      </div>
      {props.userData.education.map((educationId) => (
        <EducationBox educationId={educationId} />
      ))}
    </div>
  );
};

export default EducationContainer;
