import { useState, useEffect } from "react";

import UserCard from "../UserCard/UserCard";
import "./DataBaseContainer.css";

function DataBaseContainer(props) {
  return (
    <div className="database-container">
      {props.presentedData && props.presentedData.map((user) => <UserCard key={user?._id} userData={user} />)}
    </div>
  );
}

export default DataBaseContainer;
