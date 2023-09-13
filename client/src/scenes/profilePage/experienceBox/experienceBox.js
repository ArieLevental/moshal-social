import { useContext } from "react";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./experienceBox.css";

const ExperienceBox = (props) => {
  const { signedUserData, token, handleExpiredToken } =
    useContext(globalContext);
  const { userId } = useParams();
  // const organizationItem = props.organizationItems.slice(0, -1);
  // const organizationId = props.organizationId;

  const handleExperienceDelete = (e) => {
    fetch(`http://localhost:3001/user/delete${props.route}Item/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        [props.experienceId]: props.experienceItem._id,
        [props.organizationId]: props.experienceItem[props.organizationId]._id,
      }),
    }).then(async (res) => {
      const resJson = await res.json();
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
    <div className="experience-box">
      <div className="experience-box-left-section">
        <p className="experience-box-company-name">
          {props.experienceItem[props.organizationId].name}
        </p>
        <img
          className="experience-box-company-logo"
          src={props.experienceItem[props.organizationId].logoPath}
        />
      </div>
      <div className="experience-box-right-section">
        <p className="experience-box-position">
          {props.experienceItem[props.fieldName]}
        </p>
        <p className="experience-box-duration">
          {props.experienceItem.startYear} - {props.experienceItem.endYear}
        </p>
      </div>
      {props.experienceItem.userId === signedUserData._id && (
        <button
          className="experience-box-remove-button"
          onClick={handleExperienceDelete}
          style={{
            visibility: props.experienceEditMode ? "visible" : "hidden",
          }}
        >
          X
        </button>
      )}
    </div>
  );
};
export default ExperienceBox;
