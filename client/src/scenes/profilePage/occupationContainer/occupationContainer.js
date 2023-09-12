import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { globalContext } from "../../../App";
import { useParams } from "react-router-dom";
import "./occupationContainer.css";
import OccupationBox from "../occupationBox/occupationBox.js";

const currentYear = new Date().getFullYear();

const OccupationContainer = (props) => {
  const [inAddMode, setInAddMode] = useState(false);
  const [userOccupationData, setUserOccupationData] = useState([]);
  const [occupationEditMode, setOccupationEditMode] = useState(false);
  const { signedUserData, token, handleExpiredToken } =
    useContext(globalContext);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/user/getOccupationItems/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson.occupationItems);
        //TODO: currently just takes the last item's, but it's not necessarily the case
        if (resJson.occupationItems.length > 0) {
          props.setCurrentWorkplace(
            resJson.occupationItems.slice(-1)[0].companyId.name
          );
        }
        setUserOccupationData(resJson.occupationItems);
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
    const occupationItemData = {
      companyId: e.target.companyId.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      position: e.target.position.value,
    };
    fetch(`http://localhost:3001/user/addOccupationItem/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(occupationItemData),
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
    setOccupationEditMode(!occupationEditMode);
  };

  return (
    <div className="occupation-container">
      {/* Add button will render only if the user is signed in and the profile is his */}
      {!inAddMode && signedUserData._id === props.userData._id && (
        <button
          className="occupation-container-add-button"
          onClick={() => setInAddMode(!inAddMode)}
        >
          Add new item
        </button>
      )}

      {inAddMode && (
        <form className="occupation-container-new-form" onSubmit={handleAdd}>
          <label htmlFor="companyId">Company:</label>
          <select id="companyId" name="companyId">
            {props?.companiesData.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
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
          ></input>
          <label htmlFor="endYear">End year:</label>
          <input
            type="number"
            min="1990"
            max={currentYear + 10}
            defaultValue="2000"
            name="endYear"
            id="endYear"
          ></input>
          <label htmlFor="position">Position:</label>
          <input type="text" name="position" id="position"></input>
          <div className="new-form-buttons-container">
            <button className="new-form-button" type="submit">
              <FontAwesomeIcon className="icon" icon={faCheck} />
            </button>
            <button
              className="new-form-button"
              onClick={(e) => {
                setInAddMode(!inAddMode);
              }}
            >
              <FontAwesomeIcon className="icon" icon={faX} />
            </button>
          </div>
        </form>
      )}

      <div className="occupation-section">
        {signedUserData._id === props.userData._id && (
          <button
            className="occupation-section-remove-controller"
            onClick={handleRemoveItems}
          >
            Remove items
          </button>
        )}
        {userOccupationData.map((occupationItem) => (
          <OccupationBox
            key={occupationItem._id}
            occupationItem={occupationItem}
            occupationEditMode={occupationEditMode}
          />
        ))}
      </div>
    </div>
  );
};

export default OccupationContainer;
