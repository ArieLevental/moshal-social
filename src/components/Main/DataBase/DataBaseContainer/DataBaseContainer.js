import React from "react";
import { useState, useEffect } from "react";

import "./DataBaseContainer.css";
import UserCard from "../UserCard/UserCard";

function DataBaseContainer(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${props.presentedData}`)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      });
  }, [props?.presentedData]);

  return (
    <div className="database-container">
      {/* Only shows 8 users */}
      {isLoading && <h1 className="DELETE-ME-AND-REPLACE">LOADING</h1>}
      {data &&
        data.users.slice(0, 8).map((user) => <UserCard userData={user} />)}
    </div>
  );
}

export default DataBaseContainer;
