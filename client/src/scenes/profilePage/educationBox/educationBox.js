import "./educationBox.css";
import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";

const EducationBox = (props) => {
  const { signedUserId, token, handleExpiredToken } = useContext(globalContext);
  const { userId } = useParams();

  const handleEducationDelete = (e) => {
    fetch(`http://localhost:3001/user/deleteEducationItem/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        educationId: props.educationItem._id,
        institutionId: props.educationItem.institutionId._id,
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
    <div className="education-box">
      <p className="education-box-institution-name">
        {props.educationItem.institutionId.name}{" "}
      </p>
      <img
        className="education-box-institution-logo"
        src={props.educationItem.institutionId.logoPath}
      />
      <p className="education-box-duration">
        {props.educationItem.startYear} - {props.educationItem.endYear}
      </p>
      <p className="education-box-degree"> {props.educationItem.degree} </p>
      {props.educationItem.userId === signedUserId &&
        props.educationEditMode && (
          <button
            className="education-box-remove-button"
            onClick={handleEducationDelete}
          >
            Remove
          </button>
        )}
    </div>
  );
};
export default EducationBox;
