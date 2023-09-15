const handleExpiredToken = (setToken, setSignedUserData) => {
  fetch("http://localhost:3001/auth/logout", { method: "POST" });
  // TODO: Need to check if the response is ok
  localStorage.removeItem("user_data");
  localStorage.removeItem("token");
  setToken("");
  setSignedUserData(null);
};

export default handleExpiredToken;
