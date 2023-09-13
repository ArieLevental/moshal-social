import { useContext, useState } from "react";
import "./Searchbar.css";
import { usersDbDataContext } from "../index.js";

const Searchbar = ({ institutionsData, companiesData }) => {
  // Local state
  const [companyFilter, setCompanyFilter] = useState("");
  const [universityFilter, setUniversityFilter] = useState("");
  const [query, setQuery] = useState("");
  const { usersDbData, setPresentedData } = useContext(usersDbDataContext);

  // Functions
  const activateFilter = (query, companyFilter, universityFilter) => {
    setPresentedData(
      usersDbData.filter((user) => {
        return (
          (query
            ? user.firstName.toLowerCase().includes(query) ||
              user.lastName.toLowerCase().includes(query)
            : true) &&
          (companyFilter
            ? user.occupation.some(
                (occupation) => occupation.companyId === companyFilter
              )
            : true) &&
          (universityFilter
            ? user.education.some(
                (education) => education.institutionId === universityFilter
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

  // setPresentedData(
  //   usersData.filter((user) => {
  //     return (
  //       user.firstName.toLowerCase().includes(value) ||
  //       user.lastName.toLowerCase().includes(value)
  //     );
  //   })
  // );
  // };

  const randomMoshalnikHandler = (event) => {
    setPresentedData(
      Array(usersDbData[Math.floor(Math.random() * usersDbData.length)])
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
        <label htmlFor="companyId" className="dropdown-label">
          Company:
        </label>
        <select
          id="companyId"
          name="companyId"
          onChange={searchCompanyHandler}
          defaultValue="none"
        >
          <option value=""></option>
          {companiesData?.map((company) => (
            <option key={company._id} value={company._id}>
              {company.name}
            </option>
          ))}
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
          {institutionsData?.map((institution) => (
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
