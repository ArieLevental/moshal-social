import { useState } from "react";

import "./index.css";
import DataBaseContainer from "./DataBaseContainer/DataBaseContainer";
import SearchBar from "./SearchBar/SearchBar";

function UsersPage() {
  const [presentedData, setPresentedData] = useState("");

  return (
    <div className="database">
      <h1>Users</h1>
      <SearchBar setPresentedData={setPresentedData} />
      <DataBaseContainer presentedData={presentedData} />
    </div>
  );
}

export default UsersPage;
