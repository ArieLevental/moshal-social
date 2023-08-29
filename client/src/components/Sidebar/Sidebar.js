import "./Sidebar.css";

const Sidebar = (props) => {
  const changeMode = (modeId) => {
    props.setMainMode(modeId);
  };

  return (
    <div>
      <div
        className="sidebar-item"
        onClick={() => {
          changeMode(1);
        }}
      >
        Homepage
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          changeMode(2);
        }}
      >
        Users database
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          changeMode(3);
        }}
      >
        Job sharing
      </div>
    </div>
  );
};

export default Sidebar;
