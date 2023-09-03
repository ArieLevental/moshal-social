import "./Searchbar.css";

function Searchbar(props) {
  const searchUpdateHandler = (event) => {
    const value = event.target.value.toLowerCase();

    props.setPresentedData(
      props.usersData.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(value) ||
          user.lastName.toLowerCase().includes(value)
        );
      })
    );
  };

  const randomMoshalnikHandler = (event) => {
    props.setPresentedData(
      Array(props.usersData[Math.floor(Math.random() * props.usersData.length)])
    );
  };

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
          className="dropdown-menu company"
          id="company"
          defaultValue="none"
        >
          <option value="none" />
          <option value="volvo">Intel</option>
          <option value="saab">Microsoft</option>
          <option value="mercedes">Lightricks</option>
          <option value="audi">Tnuva</option>
        </select>

        <label htmlFor="uni" className="dropdown-label">
          Uni:
        </label>
        <select
          className="dropdown-menu uni"
          id="uni"
          onChange={() => console.log("test")}
          defaultValue="none"
        >
          <option value="none" />
          <option value="volvo">HUJI</option>
          <option value="saab">TAU</option>
          <option value="mercedes">Technion</option>
          <option value="audi">BGU</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
