import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import israelCities from "./data/israel_cities.json";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./scenes/homePage/index";
import UsersPage from "./scenes/usersPage/index";
import ProfilePage from "./scenes/profilePage/index";
import LandingPage from "./scenes/landingPage";
import JobsPage from "./scenes/jobsPage/index";

import { createContext } from "react";

export const globalContext = createContext();

function App() {
  // Global state for the app
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [signedUserData, setSignedUserData] = useState(
    JSON.parse(localStorage.getItem("user_data"))
  );
  const [usersDbData, setUsersDbData] = useState(
    JSON.parse(localStorage.getItem("users_db_data"))
  );
  const [institutionsData, setInstitutionsData] = useState(
    JSON.parse(localStorage.getItem("institutions_data"))
  );
  const [companiesData, setCompaniesData] = useState(
    JSON.parse(localStorage.getItem("companies_data"))
  );
  const [jobsData, setJobsData] = useState(
    JSON.parse(localStorage.getItem("jobs_data"))
  );

  const handleExpiredToken = () => {
    fetch("http://localhost:3001/auth/logout", { method: "POST" });
    // TODO: Need to check if the response is ok
    localStorage.removeItem("token");
    // setEmail("");
    setToken("");
    setSignedUserData(null);
  };

  return (
    <div className="app">
      <globalContext.Provider
        value={{
          signedUserData,
          setSignedUserData,
          token,
          setToken,
          handleExpiredToken,
          usersDbData,
          setUsersDbData,
          israelCities,
          institutionsData,
          setInstitutionsData,
          companiesData,
          setCompaniesData,
          jobsData,
          setJobsData,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <div className="app-main">
            <div className="app-main-content">
              <Routes>
                <Route
                  path="/"
                  element={!token ? <LandingPage /> : <Navigate to="/home" />}
                />
                <Route
                  path="/home"
                  element={token ? <HomePage /> : <Navigate to="/" />}
                />
                <Route
                  path="/users"
                  element={token ? <UsersPage /> : <Navigate to="/" />}
                />
                <Route
                  path="/user/:userId"
                  element={token ? <ProfilePage /> : <Navigate to="/" />}
                />
                <Route
                  path="/jobs"
                  element={token ? <JobsPage /> : <Navigate to="/" />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </globalContext.Provider>
    </div>
  );
}

export default App;
