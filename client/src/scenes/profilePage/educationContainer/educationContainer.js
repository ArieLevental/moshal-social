import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./educationContainer.css";
import EducationBox from "../educationBox/educationBox.js";

const currentYear = new Date().getFullYear();

const EducationContainer = () => {
  const [inAddMode, setInAddMode] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setInAddMode(!inAddMode);
  };

  return (
    <div className="education-container">
      <div className="education-add-new">
        {inAddMode && (
          <div>
            <form onSubmit={handleAdd}>
              <label htmlFor="institution">
                {"institution (id) fix this:"}
              </label>
              <input type="text" name="institution" id="institution"></input>
              <br />
              <label htmlFor="startYear">start year</label>
              <select name="startYear" id="startYear">
                <option key={currentYear} value={currentYear}>
                  {currentYear}
                </option>
                <option key={currentYear + 1} value={currentYear + 1}>
                  {currentYear + 1}
                </option>
              </select>

              <br />
              <label htmlFor="endYear">end year</label>
              <select name="endYear" id="endYear">
                {Array.from({ length: 11 }, (_, index) => {
                  const year = currentYear + index;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
              <br />
              <label htmlFor="degree">degree</label>
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
      <EducationBox />
      <EducationBox />
    </div>
  );
};

export default EducationContainer;
