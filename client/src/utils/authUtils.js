const handleExpiredToken = (setToken, setSignedUserData) => {
  fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/logout`, {
    method: "POST",
  });
  // TODO: Need to check if the response is ok
  localStorage.removeItem("user_data");
  localStorage.removeItem("token");
  setToken("");
  setSignedUserData(null);
};

export default handleExpiredToken;
