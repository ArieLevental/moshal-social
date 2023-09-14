import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { globalContext } from "../../../App";
import ExperienceBox from "../experienceBox/experienceBox.js";
import "./experienceContainer.css";
import { globalAuthContext } from "../../../state/state.js";
import { userDataContext } from "../index.js";

const currentYear = new Date().getFullYear();

const ExperienceContainer = ({
  organizationsData,
  experienceItems,
  deleteExperienceItem,
  addExperienceItem,
  organizationType,
  field,
}) => {
  const [inAddMode, setInAddMode] = useState(false);
  // const [userExperienceData, setUserExperienceData] = useState([]);
  const [inRemoveMode, setInRemoveMode] = useState(false);
  const {
    setSignedUserData,
    setToken,
    signedUserData,
    token,
    handleExpiredToken,
  } = useContext(globalAuthContext);
  const { userData } = useContext(userDataContext);
  const { userId } = useParams();
  // const routeToLower = props.route.toLowerCase();
  // const organizationId = props.organization.toLowerCase() + "Id"; // TODO TEMP!!!
  // const experienceItems = props.route.toLowerCase() + "Items"; // TODO TEMP!!!
  // const experienceId = routeToLower + "Id";
  // const fieldName = props.field.toLowerCase();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/user/get${props.route}Items/${userId}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then(async (res) => {
  //     const resJson = await res.json();
  //     if (res.status === 200) {
  //       console.log(experienceItems, resJson[experienceItems]);
  //       //TODO: currently just takes the last item's, but it's not necessarily the case
  //       if (resJson[experienceItems].length > 0) {
  //         props.setCurrentOrganization(
  //           resJson[experienceItems].slice(-1)[0][organizationId].name // TODO: company to general case
  //         );
  //       }
  //       setUserExperienceData(resJson[experienceItems]);
  //     } else if (res.status === 401) {
  //       alert("You are not authorized to view this page");
  //       handleExpiredToken(setSignedUserData, setToken);
  //     } else {
  //       alert("Something went wrong, please try again later");
  //     }
  //   });
  // }, [inAddMode]);

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   setInAddMode(false);
  //   const experienceItemData = {
  //     organizationId: e.target.organizationId.value,
  //     startYear: e.target.startYear.value,
  //     endYear: e.target.endYear.value,
  //     [fieldName]: e.target[fieldName].value,
  //   };
  //   fetch(`http://localhost:3001/user/add${props.route}Item/${userId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(experienceItemData),
  //   }).then(async (res) => {
  //     const resJson = await res.json();
  //     if (res.status === 200) {
  //       props.setUserData({ ...userData, ...resJson });
  //     } else if (res.status === 401) {
  //       alert("You are not authorized to view this page");
  //       handleExpiredToken(setSignedUserData, setToken);
  //     } else {
  //       alert("Something went wrong, please try again later");
  //     }
  //   });
  // };

  const toggleRemoveItems = () => {
    setInRemoveMode(!inRemoveMode);
  };

  const handleExperienceAdd = (e) => {
    e.preventDefault();
    setInAddMode(false)
    addExperienceItem({
      organizationId: e.target.organizationId.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      [field.toLowerCase()]: e.target.field.value,
    });
  };

  return (
    <div className="experience-container">
      {signedUserData._id === userData._id && !inAddMode && (
        <div className="experience-container-buttons">
          <button onClick={toggleRemoveItems}>Remove items</button>
          <button onClick={() => setInAddMode(!inAddMode)}>Add new item</button>
        </div>
      )}

      {inAddMode && (
        <form className="experience-container-new-form" onSubmit={handleExperienceAdd}>
          <label htmlFor="organizationId">{organizationType}:</label>
          <select id="organizationId" name="organizationId">
            {organizationsData.map((organization) => (
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

          <label htmlFor="field">{field}:</label>
          <input type="text" name="field" id="field" />

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
        {experienceItems.map((experienceItem) => (
          <ExperienceBox
            key={experienceItem._id}
            experienceItem={experienceItem}
            inRemoveMode={inRemoveMode}
            deleteExperienceItem={deleteExperienceItem}
            organization={
              experienceItem.companyId || experienceItem.institutionId
            }
            field={field}
            // route={props.route}
            // organizationId={organizationId}
            // fieldName={fieldName}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
