import { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  // Local state
  const [companyFilter, setCompanyFilter] = useState("");
  const [universityFilter, setUniversityFilter] = useState("");
  const [query, setQuery] = useState("");

  // Functions
  const activateFilter = (query, companyFilter, universityFilter) => {
    props.setPresentedData(
      props.usersData.filter((user) => {
        return (
          (query
            ? user.firstName.toLowerCase().includes(query) ||
              user.lastName.toLowerCase().includes(query)
            : true) &&
          // (companyFilter
          //   ? user.firstName.toLowerCase().includes(companyFilter)
          //   : true) &&
          (universityFilter
            ? user.education.some(
                (edu) => edu.institutionId === universityFilter
              )
            : true)
        );
      })
    );
  };

  const searchUpdateHandler = (event) => {
    setQuery(event.target.value.toLowerCase());
    activateFilter(
      event.target.value.toLowerCase(),
      companyFilter,
      universityFilter
    );
  };

  const searchCompanyHandler = (event) => {
    setCompanyFilter(event.target.value.toLowerCase());
    activateFilter(query, event.target.value.toLowerCase(), universityFilter);
  };

  const searchUniversityHandler = (event) => {
    setUniversityFilter(event.target.value.toLowerCase());
    activateFilter(query, companyFilter, event.target.value.toLowerCase());
  };

  // props.setPresentedData(
  //   props.usersData.filter((user) => {
  //     return (
  //       user.firstName.toLowerCase().includes(value) ||
  //       user.lastName.toLowerCase().includes(value)
  //     );
  //   })
  // );
  // };

  const randomMoshalnikHandler = (event) => {
    props.setPresentedData(
      Array(props.usersData[Math.floor(Math.random() * props.usersData.length)])
    );
  };

  // JSX
  return (
    <div className="search-bar">
      <input
        className="input-placeholder"
        type="search"
        placeholder="Search user"
        onChange={searchUpdateHandler} // TODO: CHECK IF GOOD PRACTICE
      />
      <button
        className="search-button random-search-button"
        onClick={randomMoshalnikHandler} // TODO: CHECK IF GOOD PRACTICE
      >
        Random Moshalnik
      </button>

      <div className="filter-zone">
        <label htmlFor="company" className="dropdown-label">
          Company:
        </label>
        <select
          className="dropdown-menu-company"
          id="company"
          defaultValue="none"
          onChange={searchCompanyHandler}
        >
          <option value="" />
          <option value="volvo">Intel</option>
          <option value="saab">Microsoft</option>
          <option value="mercedes">Lightricks</option>
          <option value="audi">Tnuva</option>
        </select>

        <label htmlFor="institutionId" className="dropdown-label">
          Institution:
        </label>
        <select
          id="institutionId"
          name="institutionId"
          onChange={searchUniversityHandler}
          defaultValue="none"
        >
          <option value=""></option>
          {props.institutionsData?.map((institution) => (
            <option key={institution._id} value={institution._id}>
              {institution.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Searchbar;
