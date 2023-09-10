import { useState } from "react";
import "./Searchbar.css";


function Searchbar(props) {
  const [companyFilter, setCompanyFilter] = useState("");
  const [query, setQuery] = useState("");

  const activateFilter = (query, companyFilter) => {
    props.setPresentedJobsData(
      props.jobsData.filter((job) => {
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
    // const value = event.target.value.toLowerCase();
    setQuery(event.target.value.toLowerCase());
    activateFilter(event.target.value.toLowerCase(), companyFilter);
    // props.setPresentedJobsData(
    //   props.jobsData.filter((job) => {
    //     return (
    //       (job.offerTitle.toLowerCase().includes(value) ||
    //         job.content.toLowerCase().includes(value)) &&
    //       (companyFilter
    //         ? job.companyId.name.toLowerCase().includes(companyFilter)
    //         : true)
    //     );
    //   })
    // );
  };

  const searchCompanyHandler = (event) => {
    // const value = event.target.value.toLowerCase();
    setCompanyFilter(event.target.value.toLowerCase());
    activateFilter(query, event.target.value.toLowerCase());
    // props.setPresentedJobsData(
    //   props.jobsData.filter((job) => {
    //     return job.companyId.name.toLowerCase().includes(value);
    //   })
    // );
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
          {props.companiesData?.map((company) => (
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
