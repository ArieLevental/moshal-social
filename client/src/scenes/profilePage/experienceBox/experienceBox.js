import { useContext } from "react";
import "./experienceBox.css";
import { globalAuthContext } from "../../../state/state.js";

const ExperienceBox = ({
  experienceItem,
  inRemoveMode,
  deleteExperienceItem,
  organization,
  field,
}) => {
  const { signedUserData } = useContext(globalAuthContext);

  const handleExperienceDelete = (e) => {
    e.preventDefault();
    deleteExperienceItem(experienceItem._id, organization._id);
    console.log(experienceItem._id, organization._id);
  };

  return (
    <div className="experience-box">
      <div className="experience-box-left-section">
        <p className="experience-box-company-name">{organization.name}</p>
        <img
          className="experience-box-company-logo"
          src={organization.logoPath}
        />
      </div>
      <div className="experience-box-right-section">
        <p className="experience-box-position">
          {experienceItem[field.toLowerCase()]}
        </p>
        <p className="experience-box-duration">
          {experienceItem.startYear} - {experienceItem.endYear}
        </p>
      </div>
      {experienceItem.userId === signedUserData._id && (
        <button
          className="experience-box-remove-button"
          onClick={handleExperienceDelete}
          style={{
            visibility: inRemoveMode ? "visible" : "hidden",
          }}
        >
          X
        </button>
      )}
    </div>
  );
};
export default ExperienceBox;
