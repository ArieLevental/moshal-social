import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const performRandomSearch = () => {
    return;
  };

  return (
    <div className="search-bar">
      <input
        className="input-placeholder"
        type="search"
        placeholder="Search user"
        onChange={(event) => props.setPresentedData(event.target.value)}
      />
      <button
        className="search-button random-search-button"
        onClick={performRandomSearch}
      >
        Random Moshalnik
      </button>

      <div className="filter-zone">
        <label htmlFor="company" className="dropdown-label">Company:</label>
        <select className="dropdown-menu company" id="company">
          <option value="volvo">Intel</option>
          <option value="saab">Microsoft</option>
          <option value="mercedes">Lightricks</option>
          <option value="audi">Tnuva</option>
        </select>

        <label htmlFor="uni" className="dropdown-label"> Uni: </label>
        <select className="dropdown-menu uni" id="uni">
          <option value="volvo">HUJI</option>
          <option value="saab">TAU</option>
          <option value="mercedes">Technion</option>
          <option value="audi">BGU</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
