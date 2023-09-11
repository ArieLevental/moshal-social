import "./occupationBox.css";
import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";

const OccupationBox = (props) => {
  const { signedUserData, token, handleExpiredToken } = useContext(globalContext);
  const { userId } = useParams();

  const handleOccupationDelete = (e) => {
    fetch(`http://localhost:3001/user/deleteOccupationItem/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        occupationId: props.occupationItem._id,
        companyId: props.occupationItem.companyId._id,
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
    <div className="occupation-box">
      <p className="occupation-box-company-name">
        {props.occupationItem.companyId.name}{" "}
      </p>
      <img
        className="occupation-box-company-logo"
        src={props.occupationItem.companyId.logoPath}
      />
      <p className="occupation-box-duration">
        {props.occupationItem.startYear} - {props.occupationItem.endYear}
      </p>
      <p className="occupation-box-position"> {props.occupationItem.position} </p>
      {props.occupationItem.userId === signedUserData._id &&
        props.occupationEditMode && (
          <button
            className="occupation-box-remove-button"
            onClick={handleOccupationDelete}
          >
            Remove
          </button>
        )}
    </div>
  );
};
export default OccupationBox;
