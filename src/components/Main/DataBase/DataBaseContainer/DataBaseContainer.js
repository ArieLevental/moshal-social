import React from "react";
import { useState, useEffect } from "react";

import "./DataBaseContainer.css";
import UserCard from "../UserCard/UserCard";

import { getDatabase, ref, onValue } from "firebase/database";
import db from "../../../../config/firebase"


// const users = ref(db, "users/");
// onValue(users, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// }, (error) => {
//   console.error("Error fetching data from Firebase:", error);
// });

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
        data.users.slice(0, 8).map((user) => <UserCard key={user.id} userData={user} />)}
    </div>
  );
}

export default DataBaseContainer;
