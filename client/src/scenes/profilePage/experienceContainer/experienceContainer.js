import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { globalContext } from "../../../App";
import ExperienceBox from "../experienceBox/experienceBox.js";
import "./experienceContainer.css";

const currentYear = new Date().getFullYear();

const ExperienceContainer = (props) => {
  const [inAddMode, setInAddMode] = useState(false);
  const [userExperienceData, setUserExperienceData] = useState([]);
  const [experienceEditMode, setExperienceEditMode] = useState(false);
  const { signedUserData, token, handleExpiredToken } =
    useContext(globalContext);
  const { userId } = useParams();
  const routeToLower = props.route.toLowerCase();
  const organizationId = props.organization.toLowerCase() + "Id"; // TODO TEMP!!!
  const experienceItems = props.route.toLowerCase() + "Items"; // TODO TEMP!!!
  const experienceId = routeToLower + "Id";
  const fieldName = props.field.toLowerCase();

  useEffect(() => {
    fetch(`http://localhost:3001/user/get${props.route}Items/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.log(experienceItems, resJson[experienceItems]);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        if (resJson[experienceItems].length > 0) {
          props.setCurrentOrganization(
            resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
          );
        }
        setUserExperienceData(resJson[experienceItems]);
      } else if (res.status === 401) {
        alert("You are not authorized to view this page");
        handleExpiredToken();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }, [inAddMode]);

  const handleAdd = (e) => {
    e.preventDefault();
    setInAddMode(false);
    const experienceItemData = {
      [organizationId]: e.target[organizationId].value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      [fieldName]: e.target[fieldName].value,
    };
    fetch(`http://localhost:3001/user/add${props.route}Item/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(experienceItemData),
    }).then(async (res) => {
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

  const handleRemoveItems = () => {
    setExperienceEditMode(!experienceEditMode);
  };

  return (
    <div className="experience-container">
      {signedUserData._id === props.userData._id && !inAddMode && (
        <div className="experience-container-buttons">
          <button onClick={handleRemoveItems}>Remove items</button>
          <button onClick={() => setInAddMode(!inAddMode)}>Add new item</button>
        </div>
      )}

      {inAddMode && (
        <form className="experience-container-new-form" onSubmit={handleAdd}>
          <label htmlFor={organizationId}>{props.organization}:</label>
          <select id={organizationId} name={organizationId}>
            {props?.organizationsData.map((organization) => (
              <option key={organization._id} value={organization._id}>
                {organization.name}
              </option>
            ))}
          </select>

          <label htmlFor="startYear">Start year:</label>
          <input
            type="number"
            min="1990"
            max={currentYear + 1}
            defaultValue="1990"
            name="startYear"
            id="startYear"
          />

          <label htmlFor="endYear">End year:</label>
          <input
            type="number"
            min="1990"
            max={currentYear + 10}
            defaultValue="2000"
            name="endYear"
            id="endYear"
          />

          <label htmlFor={fieldName}>{props.field}:</label>
          <input type="text" name={fieldName} id={fieldName} />

          <div className="new-form-buttons-container">
            <button type="submit">Add</button>
            <button
              onClick={() => {
                setInAddMode(!inAddMode);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="experience-section">
        {userExperienceData.map((experienceItem) => (
          <ExperienceBox
            key={experienceItem._id}
            experienceItem={experienceItem}
            experienceEditMode={experienceEditMode}
            route={props.route}
            organizationId={organizationId}
            experienceItems={experienceItems}
            experienceId={experienceId}
            fieldName={fieldName}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
