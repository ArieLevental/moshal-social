import { useContext, useState } from "react";
import { jobsDataContext } from "../index.js";
import { companiesDataContext } from "../../../state/state.js";

function Searchbar() {
  const { companiesData } = useContext(companiesDataContext);
  const { jobsData, setPresentedJobsData } = useContext(jobsDataContext);
  const [companyFilter, setCompanyFilter] = useState("");
  const [query, setQuery] = useState("");

  const activateFilter = (query, companyFilter) => {
    setPresentedJobsData(
      jobsData.filter((job) => {
        return (
          (query
            ? job.offerTitle.toLowerCase().includes(query) ||
              job.content.toLowerCase().includes(query) ||
              job.companyId.name.toLowerCase().includes(query)
            : true) &&
          (companyFilter
            ? job.companyId.name.toLowerCase().includes(companyFilter)
            : true)
        );
      })
    );
  };

  const searchUpdateHandler = (event) => {
    setQuery(event.target.value.toLowerCase());
    activateFilter(event.target.value.toLowerCase(), companyFilter);
  };

  const searchCompanyHandler = (event) => {
    setCompanyFilter(event.target.value.toLowerCase());
    activateFilter(query, event.target.value.toLowerCase());
  };

  return (
    <div className="search-bar">
      <input
        className="input-placeholder"
        type="search"
        placeholder="Search whatever"
        onChange={searchUpdateHandler} // TODO: CHECK IF GOOD PRACTICE
      />

      <div className="filter-zone">
        <label htmlFor="company" className="dropdown-label">
          Company:
        </label>
        <select
          className="dropdown-menu company"
          id="company"
          defaultValue="none"
          onChange={searchCompanyHandler}
        >
          <option value="" />
          {companiesData?.map((company) => (
            <option key={company._id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
