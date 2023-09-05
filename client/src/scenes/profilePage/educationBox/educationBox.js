import { useContext, useState, useEffect } from "react";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./educationBox.css";

const EducationBox = (props) => {
  return (
    <div className="education-box">
      <p>{props.educationId}</p>
    </div>
  );
};
export default EducationBox;
